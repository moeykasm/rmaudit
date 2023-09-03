import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">



   
        <div className="homeLogoWrapper">
          
                    <div className="logo">
                        <span className="material-symbols-rounded">
                            vpn_key
                        </span>
                        <p>RMAUDIT</p>
                    </div>
             
            </div>

    



          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Services</a></li>
            <li><a href="/login">About Us</a></li>
            <li><a href="/login">Contact</a></li>
            <li><a className="cta-button" href="/login">Get Started</a> </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h1>Secure Your Smart Contracts with RMAudit</h1>
          <p>We provide comprehensive smart contract audit services to ensure your blockchain projects are secure and reliable.</p>
          <a href="/login" className="cta-button">Explore Services</a>
        </section>
        <section className="features-section">
          <div className="feature">
            <h2>Expert Auditors</h2>
            <p>Our team of auditors specializes in identifying vulnerabilities in smart contract code.</p>
          </div>
          <div className="feature">
            <h2>Thorough Analysis</h2>
            <p>We perform in-depth analysis of your smart contracts to ensure they meet industry security standards.</p>
          </div>
          <div className="feature">
            <h2>Transparent Process</h2>
            <p>Our audit process is transparent, and we provide detailed reports of our findings and recommendations.</p>
          </div>

          <section className="team-section">

        <h2>Meet Our Team</h2>
        <div className="team-member">
          <h3>Mohammad Hassanuzzaman</h3>
          <p>Cryptography Expert</p>
        </div>

        <div className="team-member">
          <h3>Ryan Correia</h3>
          <p>Smart Contract Auditor</p>
        </div>

        <div className="team-member">
          <h3>Mohammad Kassem</h3>
          <p>Web3 Full Stack Developer</p>
        </div>
        
      </section>

        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 SmartAudit. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;