'use client';
import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>
      <div className="hero">
        <div className="geometric-bg">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
        </div>

        <nav>
          <div className="logo">
            <div className="logo-text">
              <div className="logo-title">CS CUP</div>
              <div className="logo-subtitle">CAMBODIA 2025</div>
            </div>
          </div>

          <div className="menu-icon" id="menuIcon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className="nav-links" id="navLinks">
            <li><a href="#about">About</a></li>
            <li><a href="#timeline">Previous Year</a></li>
            <li><a href="https://forms.gle/jiEVtL29jpaokYdPA">Register</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1 className="main-title">CS CUP CAMBODIA</h1>
          <h2 className="year">2025</h2>
          <p className="tagline">
            The premier programming competition for university students. 
            Test your skills, compete with peers, and showcase your coding excellence.
          </p>

          <button
            className="cta-button"
            onClick={() =>
              (window.location.href = 'https://forms.gle/jiEVtL29jpaokYdPA')
            }
          >
            Apply Now
          </button>
        </div>

        <div className="footer-badge">Powered by ParagonIU</div>
      </div>

      <section id="about">
        <div className="about-container">
          <h2>About CS CUP CAMBODIA 2025</h2>
          <p>
            CS CUP CAMBODIA 2025 is the ultimate programming competition for aspiring junior developers. 
            Compete with peers, solve challenging problems, and showcase your coding skills on a global stage.
          </p>
          <p>
            Whether you're a beginner or an experienced coder, this competition is designed to inspire and 
            challenge you to reach new heights in your programming journey.
          </p>

          <div className="grid">
            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Timeline</h3>
              <p className="card-description">
                1st Round (12nd - 19th Dec 2025) : Online<br />
                2nd Round (21st Dec 2025) : ParagonIU
              </p>
            </div>

            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Who can join?</h3>
              <p className="card-description">
                Must be an university student <br />(Can be any majors)
              </p>
            </div>

            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Prize Pools</h3>
              <p className="card-description">
                T-shirt <br /> Certificate <br />(More will be announced)
              </p>
            </div>

            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">What to bring</h3>
              <p className="card-description">
                • Valid student ID card <br />
                • Notebook & Pen <br />
                • Anything that provides you comfort
              </p>
            </div>

            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Provided</h3>
              <p className="card-description">
                • High-speed internet <br />
                • Computer (2nd Round) <br />
                • Competition platform access
              </p>
            </div>

            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Social Media</h3>
              <a
                href="https://www.facebook.com/share/1DMgcuVu7r/?mibextid=wwXIfr"
                target="_blank"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Facebook
              </a>
              <br />
              <a
                href="https://www.instagram.com/cscupscambodia?igsh=a2RnNjVqaTR1emZw"
                target="_blank"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Instagram
              </a>
              <br />
              <a
                href=""
                target="_blank"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      
      <section id="timeline" className="section">
        <div className="content-section">
          <h2 className="section-title">Previous Year</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="timeline-item">
              <div className="timeline-title">Click here to view previous years competition:</div>
              <a
                href="https://sites.google.com/paragoniu.edu.kh/cscup/previous-years?authuser=0"
                target="_blank"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                CS CUP CAMBODIA 2020 - 2024
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <div className="pic">
        <h2>CS CUP CAMBODIA's Ceremony</h2>
        <div className="certi">
          Here are the winners and all participants who received certificates and prizes for their outstanding performance in the competition
        </div>

        <div className="grid1">
          {/* Your images remain unchanged */}
          {/* ... */}
        </div>
      </div>

      {/* Sponsor Section */}
      <section className="sponsor">
        <h1>Organize by</h1>
        <div className="sponsor-box">
          <img src="https://paragoniu.edu.kh/wp-content/uploads/2020/04/Logo-06-800x277.png" alt="Paragon Logo" className="logo" />
          <img src="https://schoolscambodia.com/wp-content/uploads/2024/12/Paragon-University-1.jpg" alt="Paragon Building" className="building" />
          <a href="https://www.facebook.com/share/19jajFXgU8/" target="_blank" className="learn-btn">Paragon IU</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CS Cup Junior 2025</h3>
            <p className="footer-description">
              Since 2022<br />
              Cambodia CS Cup CAMBODIA designed for university students. 
            </p>
          </div>

          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#about">Who are we?</a></li>
              <li><a href="#about">What do we do?</a></li>
              <li><a href="#about">Who can join?</a></li>
              <li><a href="#about">What to bring</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Timeline</h3>
            <ul>
              <li><a href="#about">Round 1: Online</a></li>
              <li><a href="#about">Round 2: Physical</a></li>
              <li><a href="#about">Announcements</a></li>
              <li><a href="#about">Winner Announcement</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Find Us</h3>
            <a
              href="mailto:cambodiacscup@gmail.com"
              target="_blank"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              cambodiacscup@gmail.com
            </a>

            <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '20px' }}>
              No. 8-9, 315, Boeng Kak 1, Tuol Kork, Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 CS Cup CAMBODIA. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
