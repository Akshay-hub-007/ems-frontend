import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./EmployeeDashboard.css";
import {
  FaTachometerAlt,
  FaUserEdit,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  const employeeName = location.state?.name || "Employee";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };
  console.log(user)
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        {/* Main Content */}
        <main className="dashboard-main">
          {/* ✅ Employee Profile Card */}
          <section className="profile-card">
            <img
              src={user?.photo || "https://via.placeholder.com/80"}
              alt="Employee"
              className="profile-avatar"
            />
            <div className="profile-info">
              <h3 className="profile-name">{user?.fullname}</h3>
              <p className="profile-role">{user?.role || "Software Engineer"}</p>
              <p className="profile-dept">Department: {user?.department}</p>
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </section>

          {/* Dashboard Overview */}
          <section className="dashboard-overview">
            <h2>Welcome, {user?.fullname || employeeName}!</h2>
            <p>Quick Access:</p>
            <div className="dashboard-links">
              <div className="link-card" onClick={() => navigate("/payslips")}>
                <FaFileInvoiceDollar size={30} />
                <p>Payslips</p>
              </div>
              <div className="link-card" onClick={() => navigate("/leave")}>
                <FaCalendarAlt size={30} />
                <p>Leave Requests</p>
              </div>
              <div className="link-card" onClick={() => navigate("/profile")}>
                <FaUserEdit size={30} />
                <p>Update Profile</p>
              </div>
              <div className="link-card" onClick={() => navigate("/salary")}>
                <FaMoneyBillWave size={30} />
                <p>Salary Info</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
