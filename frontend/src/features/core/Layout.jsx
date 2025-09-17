import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react"; // if you installed lucide-react; otherwise comment these
import "../../index.css";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Map", path: "/map" },
  { label: "Modules", path: "/modules" },
  { label: "Quizzes", path: "/quizzes" },
  { label: "Drills", path: "/drills" },
  { label: "Admin", path: "/admin" }
];

function ThemeToggle({ theme, setTheme }){
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{ display:'flex', alignItems:'center', gap:8, padding:8, borderRadius:10, background:'transparent', border:'1px solid rgba(255,255,255,0.03)' }}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span style={{fontSize:13}}>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

export default function Layout(){
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || 'light'; }
    catch(e){ return 'light' }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // underline element
  const underlineRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // place underline under active link
    const nav = navRef.current;
    if (!nav) return;
    const active = nav.querySelector(".nav-item.active");
    const bar = underlineRef.current;
    if (!bar || !active) { bar.style.width = '0px'; return; }
    const rect = active.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const left = rect.left - navRect.left;
    bar.style.width = `${rect.width}px`;
    bar.style.transform = `translateX(${left}px)`;
  }, [location]);

  return (
    <motion.div initial={{ opacity: 0.92 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <header className="app-nav">
        <div className="brand">
          <div className="logo">DP</div>
          <h1 style={{margin:0}}>Disaster PWA</h1>
        </div>

        <div style={{display:'flex', gap:16, alignItems:'center'}}>
          <nav ref={navRef} className="nav-items" aria-label="Primary Navigation" role="navigation">
            {NAV_ITEMS.map((n) => {
              const isActive = n.path === "/" ? location.pathname === "/" : location.pathname.startsWith(n.path);
              return (
                <Link to={n.path} key={n.path} style={{textDecoration:'none'}}>
                  <div className={`nav-item ${isActive ? 'active' : ''}`} role="link" aria-current={isActive ? 'page' : undefined}>
                    <span className="dot" style={{background: isActive ? 'linear-gradient(90deg,var(--accent),var(--accent-2))' : 'transparent'}} />
                    {n.label}
                  </div>
                </Link>
              );
            })}
            <div ref={underlineRef} className="underline-bar" />
          </nav>

          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <Link to="/login" style={{ textDecoration:'none' }}>
              <button className="btn btn-ghost" style={{ padding:'8px 12px' }}>Login</button>
            </Link>
            <Link to="/register" style={{ textDecoration:'none' }}>
              <button className="btn btn-primary" style={{ padding:'8px 12px' }}>Sign up</button>
            </Link>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </motion.div>
  );
}