import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import EmployeeManagement from "./EmployeeManagement";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Payslips from "./Payslips";
import Leave from "./Leave";
import Profile from "./Profile";
import EmployeeDashboard from "./EmployeeDashboard";
import Employees from "./Employees";
import Payroll from "./Payroll";
import Performance from "./Performance";
import Dashboard from "./Dashboard";
import AddEmployee from "./Addemployee";
import Department from "./Department";
import Salary from "./Salary";
import Leaves from "./Leaves";
import Sidebar from "./Sidebar";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

function AppContent() {
  const [employees, setEmployees] = useState([]);
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  // Hide Sidebar on Landing Page, SignIn, SignUp
  const hideSidebar = ["/", "/signin", "/signup"].includes(location.pathname);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  return (
    <div className="app-container">
      {!hideSidebar && <Sidebar />}

      <div className="main-content">
        {/* Navbar always visible */}
        <Navbar />

        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Dashboard (role-based) */}
          <Route
            path="/dashboard"
            element={user?.role === "admin" ? <Dashboard /> : <EmployeeDashboard />}
          />

          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Employee Pages */}
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/profile" element={<Profile />} />

          {/* Employee Management */}
          <Route path="/employees" element={<Employees employees={employees} />} />
          <Route path="/addemployee" element={<AddEmployee onAdd={handleAddEmployee} />} />

          {/* Admin Pages */}
          <Route path="/department" element={<Department />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/leaves" element={<Leaves />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Toaster />
    </Router>
  );
}

export default App;
