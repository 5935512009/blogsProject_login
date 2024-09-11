import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    // loginResponse log ออกมาดู
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      console.log(loginResponse);
    if (userData) {
      try {
        setUser(JSON.parse(userData)); // แปลงจาก JSON กลับเป็น object
      } catch (error) {
        console.error("Invalid JSON data:", error);
      }
    }
  }, []);
  console.log("this is " + user);
  const handleLogout = () => {
    localStorage.removeItem("token"); // ลบ token
    localStorage.removeItem("user");  // ลบข้อมูล user
    navigate("/login"); // นำผู้ใช้ไปยังหน้า login
    window.location.reload(); // รีโหลดหน้าใหม่
  };

  return (
    <div className='home'>
      <div className='bayBook'>
        {/* แสดงชื่อผู้ใช้ ถ้ามี */}
        {user ? <span>Welcome, {user.firstName}</span> : <span>Loading...</span>}
        <button className='logout' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
