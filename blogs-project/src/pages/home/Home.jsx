import React from 'react';
import { useNavigate } from 'react-router-dom';

// ใช้ class component ภายใน function component
export default function Home() {
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  }
  return (
    <div className='home'>
       <div className='bayBook'>
        bayBook
        <button className='logout' onClick={handleLogout}>Logout</button>
       </div>
    </div>
  );
}
