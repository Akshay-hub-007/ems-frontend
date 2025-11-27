import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <div className="ems-landing">
      {/* Hero Section */}
      <section className="hero">
        <h2>Manage Your Employees Efficiently</h2>
        <p>Track attendance, payroll, leaves, and performance all in one place.</p>
        <button className="btn-primary" onClick={()=>navigate("/dashboard")}>Get Started</button>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <h3>Features</h3>
        <div className="feature-cards">
          <div className="card">
            <h4>Attendance</h4>
            <p>Monitor employee attendance with ease.</p>
          </div>
          <div className="card">
            <h4>Payroll</h4>
            <p>Automate salary calculation and payslips.</p>
          </div>
          <div className="card">
            <h4>Performance</h4>
            <p>Track employee performance and productivity.</p>
          </div>
          <div className="card">
            <h4>Leaves</h4>
            <p>Manage leave requests and approvals smoothly.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h3>Ready to simplify employee management?</h3>
        <button className="btn-primary">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 EMS. All rights reserved.</p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .hero {
          text-align: center;
          padding: 80px 20px;
          background: #ecf2ff;
        }
        .hero h2 {
          font-size: 36px;
          margin-bottom: 16px;
        }
        .hero p {
          font-size: 18px;
          margin-bottom: 24px;
        }
        .btn-primary {
          background: #2563eb;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        }
        .btn-primary:hover {
          background: #1d4ed8;
        }
        .features {
          text-align: center;
          padding: 60px 20px;
        }
        .feature-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }
        .card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .cta {
          background: #10b981;
          color: white;
          text-align: center;
          padding: 60px 20px;
        }
        footer {
          text-align: center;
          padding: 20px;
          background: #f3f4f6;
          color: #374151;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
