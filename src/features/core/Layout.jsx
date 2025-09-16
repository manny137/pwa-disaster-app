import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection:'column'}}>
      <nav style={{background:'#111827', color:'#fff', padding:'12px 20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontWeight:700}}>Disaster PWA</div>
        <div style={{display:'flex', gap:16}}>
          <Link to="/map">Map</Link>
          <Link to="/modules">Modules</Link>
          <Link to="/quizzes">Quizzes</Link>
          <Link to="/drills">Drills</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>

      <main style={{flex:1, padding:24}}>
        <Outlet />
      </main>
    </div>
  );
}
