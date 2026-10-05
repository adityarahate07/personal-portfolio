import "./styles/Specialties.css";
import { TbDatabase, TbWand } from "react-icons/tb";

const Specialties = () => {
  return (
    <section className="specialties-section section-container" id="specialties">
      {/* Bento Stats Grid (2-column balanced stats) */}
      <div className="bento-stats-grid">
        <div className="bento-stat-card">
          <div className="bento-stat-main">
            <div className="bento-icon-box bento-icon-cyan">
              <TbDatabase />
            </div>
            <div>
              <p className="bento-stat-label">Projects Delivered</p>
              <h3 className="bento-stat-number stat-cyan">20+</h3>
            </div>
          </div>
          <div className="bento-badge-corner">
            <span>LIVE</span>
          </div>
        </div>

        <div className="bento-stat-card">
          <div className="bento-stat-main">
            <div className="bento-icon-box bento-icon-amber">
              <TbWand />
            </div>
            <div>
              <p className="bento-stat-label">Tech Stack Mastery</p>
              <h3 className="bento-stat-number stat-amber">15+</h3>
            </div>
          </div>
          <div className="bento-badge-corner">
            <span>STACK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
