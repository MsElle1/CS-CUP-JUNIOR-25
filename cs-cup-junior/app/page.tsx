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
              <div className="logo-subtitle">Junior 2025</div>
            </div>
          </div>
          
          <div className={`menu-icon ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#timeline" onClick={closeMenu}>Previous Year</a></li>
            <li><a href="https://forms.gle/7PHhF8GzDUY33CKHA" onClick={closeMenu}>Register</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1 className="main-title">CS CUP JUNIOR</h1>
          <h2 className="year">2025</h2>
          <p className="tagline">The premier programming competition for junior developers. Test your skills, compete with peers, and showcase your coding excellence.</p>
          <button className="cta-button" onClick={() => window.location.href='https://forms.gle/7PHhF8GzDUY33CKHA'}>Apply Now</button>
        </div>

        <div className="footer-badge">Powered by ParagonIU</div>
      </div>
      
      <section id="about">
        <div className="about-container">
          <h2>About CS CUP Junior 2025</h2>
          <p>
            CS CUP Junior 2025 is the ultimate programming competition for aspiring junior developers. 
            Compete with peers, solve challenging problems, and showcase your coding skills on a global stage.
          </p>
          <p>
            Whether you&apos;re a beginner or an experienced coder, this competition is designed to inspire and 
            challenge you to reach new heights in your programming journey.
          </p>
          <div className="grid">
            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Timeline</h3>
              <p className="card-description">20th - 26th October 2025
                <br />1st Round : Online<br />
                2nd Round : ParagonIU
              </p>
            </div>

            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Who can join?</h3>
              <p className="card-description">Grade 10 , 11 , 12 <br />Fresh graduated from grade 12<br /></p>
            </div>

            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Prize Pools</h3>
              <p className="card-description">T-shirt <br /> Certificate <br />Cash Prize or Scholarship</p>
            </div>
            
            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">What to bring</h3>
              <p className="card-description">• Valid student ID card <br />• Notebook & Pen<br />• Anything that provide you the comfort</p>
            </div>
            
            <div className="card">
              <div className="card-icon"></div>
              <h3 className="card-title">Provided</h3>
              <p className="card-description">• High-speed internet<br />• Computer (2nd Round)<br />• Competition platform access</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="timeline" className="section">
        <div className="content-section">
          <h2 className="section-title">Previous Year</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="timeline-item">
              <div className="timeline-title">Click here to view previous years competition: </div>
              <a href="https://share.google/g0iZC3CoEl2L2AZEA" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>CS CUP JUNIOR 2022 - 2024</a>
            </div>
          </div>
        </div>
      </section>
      
      <div className="pic">
        <h2>CS CUP Junior&apos;s Ceremony</h2>
        <div className="certi">Here are the winners and all participants who received certificates and prizes for their outstanding performance in the competition</div>
        <div className="grid1">
          {[
            'DSC07244.jpg', 'DSC07263.jpg', 'DSC07287.jpg', 'DSC07218.jpg',
            'DSC07237.jpg', 'DSC07183.jpg', 'DSC07152.jpg', 'DSC07188.jpg',
            'DSC07169.jpg', 'DSC07254.jpg'
          ].map((img, index) => (
            <div className="photo" key={index}>
              <img src={`https://paragoniu.edu.kh/wp-content/uploads/2024/12/${img}`} alt="CS Cup Ceremony" />
            </div>
          ))}
        </div>
      </div>
      
      <section className="sponsor">
        <h1>Organize by</h1>
        <div className="sponsor-box">
          <img src="https://paragoniu.edu.kh/wp-content/uploads/2020/04/Logo-06-800x277.png" alt="Paragon Logo" className="logo" />
          <img src="https://schoolscambodia.com/wp-content/uploads/2024/12/Paragon-University-1.jpg" alt="Paragon Building" className="building" />
          <a href="https://www.facebook.com/share/19jajFXgU8/" target="_blank" rel="noopener noreferrer" className="learn-btn">Paragon IU</a>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CS Cup Junior 2025</h3>
            <p className="footer-description">Since 2022<br />
              Cambodia CS Cup Junior designed for high school students. This initiative aims to spark an interest in computer science from a young age and encourage students to explore the fascinating world of technology and programming.</p>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#about">Who are we?</a></li>
              <li><a href="#about">What do we do?</a></li>
              <li><a href="#about">Who can join?</a></li>
              <li><a href="#about">what to bring</a></li>
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
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGRLhzgQMCKLbzmQSWhmKxlddkFgPfGLbvrzKTphpRrnznDcKCKbLKLgCmXHcmjWncRhR" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>cambodiacscup@gmail.com</a>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '20px' }}>No. 8-9, 315, Boeng Kak 1, Tuol Kork, Phnom Penh, Cambodia</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px' }}><a href="#" style={{ color: 'white' }}>CS Cup Juniors 2025</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CS Cup Juniors. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}