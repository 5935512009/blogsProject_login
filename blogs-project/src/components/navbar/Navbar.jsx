import React, { useEffect, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // ตรวจสอบว่ามีข้อมูลผู้ใช้หรือ token อยู่ใน localStorage หรือไม่
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // แปลงข้อมูลจาก JSON เป็น object
    }
  }, []);

  const handleLogout = () => {
    // ลบข้อมูล token และ user เมื่อทำการ logout
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(); // รีเฟรชหน้าเพื่ออัพเดท UI
    
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-menu">
          <ul className="nav-list">
            <li><Link to="./Home">home</Link></li>
            <li><Link to="./Blogs">blogs</Link></li>
            {/* แสดงเฉพาะลิงก์ Login และ Register เมื่อผู้ใช้ยังไม่ได้ login */}
            {!user ? (
              <>
                <li><Link to="./Login">login</Link></li>
                <li><Link to="./Register">register</Link></li>
              </>
            ) : (
              <>
                {/* แสดงชื่อผู้ใช้แทนลิงก์ login เมื่อผู้ใช้ได้ login แล้ว */}
                <li>Welcome, {user.firstName}</li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
