import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [leaves, setLeaves] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${API_URL}/users/getAllUsers`);
      setEmployees(res.data || []);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  const fetchDepartments = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/departments`);
      setDepartments(res.data || []);
    } catch (err) {
      console.error("Error fetching departments:", err);
    }
  };

  const fetchLeaves = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const res = await axios.get(`${API_URL}/api/leaves`);
      const allLeaves = res.data || [];

      const todayLeaves = allLeaves.filter(
        (leave) => leave.appliedDate === today
      );

      setLeaves(todayLeaves);
    } catch (err) {
      console.error("Error fetching leaves:", err);
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchDepartments();
    fetchLeaves();
  }, []);

  return (
    <div className="dashboard-wrapper">
      
      {/* NAVBAR */}
      <div className="navbar">
        <div className="navbar-left">EmployeeMS</div>
        <div className="navbar-center">Admin Dashboard</div>
        <div className="navbar-right">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h2>Welcome, Admin 👋</h2>
          <p>Here’s an overview of your organization today.</p>
        </div>

        {/* STAT CARDS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{employees.length}</h3>
            <p>Total Employees</p>
          </div>

          <div className="stat-card">
            <h3>{departments.length}</h3>
            <p>Departments</p>
          </div>

          <div className="stat-card">
            <h3>$500k</h3>
            <p>Monthly Payroll</p>
          </div>

          <div className="stat-card">
            <h3>{leaves.length}</h3>
            <p>Leave Requests Today</p>
          </div>
        </div>

        {/* LEAVE TABLE OPTIONAL */}
        <div className="table-section">
          <h3>Today’s Leave Requests</h3>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaves.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty-row">No leave requests today.</td>
                </tr>
              ) : (
                leaves.map((leave, index) => (
                  <tr key={index}>
                    <td>{leave.employeeName}</td>
                    <td>{leave.reason}</td>
                    <td>{leave.appliedDate}</td>
                    <td className="status-pending">Pending</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
