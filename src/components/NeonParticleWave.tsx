import { useEffect, useRef } from "react";
import "./styles/NeonParticleWave.css";

const NeonParticleWave = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // 50 crisp star particles (ultra lightweight)
    const particleCount = 50;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.6,
      speed: Math.random() * 0.3 + 0.08,
      baseAlpha: Math.random() * 0.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;
    let lastTime = performance.now();

    const render = (now: number) => {
      animId = requestAnimationFrame(render);

      // Pause when page is hidden to save 100% resources
      if (document.hidden) return;

      const delta = now - lastTime;
      if (delta < 15) return; // Cap at ~60fps
      lastTime = now;

      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw all star particles in a SINGLE batched draw call (zero lag)
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.phase += 0.03;
        ctx.moveTo(p.x + p.r, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        p.y -= p.speed;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
      }
      ctx.globalAlpha = 0.75;
      ctx.fill();

      // 2. Draw 2 smooth neon wave loops (Cyan to Purple) without expensive shadowBlur
      const gradCyanPurple = ctx.createLinearGradient(0, 0, width, height);
      gradCyanPurple.addColorStop(0, "rgba(6, 182, 212, 0.85)");
      gradCyanPurple.addColorStop(0.5, "rgba(168, 85, 247, 0.8)");
      gradCyanPurple.addColorStop(1, "rgba(59, 130, 246, 0.85)");

      const gradPurpleCyan = ctx.createLinearGradient(0, 0, width, height);
      gradPurpleCyan.addColorStop(0, "rgba(139, 92, 246, 0.75)");
      gradPurpleCyan.addColorStop(0.5, "rgba(56, 189, 248, 0.85)");
      gradPurpleCyan.addColorStop(1, "rgba(99, 102, 241, 0.75)");

      const waves = [
        {
          grad: gradCyanPurple,
          yOffset: height * 0.5,
          amp: 85,
          freq: 0.0018,
          speed: 1.0,
          lineWidth: 3,
        },
        {
          grad: gradPurpleCyan,
          yOffset: height * 0.56,
          amp: 110,
          freq: 0.0022,
          speed: 0.8,
          lineWidth: 2.2,
        },
      ];

      for (let w = 0; w < waves.length; w++) {
        const wave = waves[w];
        ctx.strokeStyle = wave.grad;
        ctx.lineWidth = wave.lineWidth;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();

        const step = 20;
        for (let x = 0; x <= width; x += step) {
          const w1 = Math.sin(x * wave.freq + time * wave.speed) * wave.amp;
          const w2 = Math.cos(x * wave.freq * 0.7 - time * wave.speed * 0.75) * (wave.amp * 0.4);
          const loop = Math.sin((x / width) * Math.PI) * Math.sin(time * 0.9 + x * 0.003) * 45;
          const y = wave.yOffset + w1 + w2 + loop;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // 3 traveling energy pulses along the wave
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        for (let j = 0; j < 3; j++) {
          const prog = (((time * 0.25 * wave.speed + j / 3) % 1) * width);
          const w1 = Math.sin(prog * wave.freq + time * wave.speed) * wave.amp;
          const w2 = Math.cos(prog * wave.freq * 0.7 - time * wave.speed * 0.75) * (wave.amp * 0.4);
          const loop = Math.sin((prog / width) * Math.PI) * Math.sin(time * 0.9 + prog * 0.003) * 45;
          const py = wave.yOffset + w1 + w2 + loop;
          ctx.moveTo(prog + 3, py);
          ctx.arc(prog, py, 3, 0, Math.PI * 2);
        }
        ctx.globalAlpha = 0.95;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="neon-particle-wave-canvas" />;
};

export default NeonParticleWave;
