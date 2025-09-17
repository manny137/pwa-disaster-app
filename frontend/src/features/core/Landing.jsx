import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene"; // the 3D canvas component we'll create
import "../../index.css";
import AuthCard from "../../components/AuthCard";

export default function Landing(){
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="landing" style={{ position:'relative' }}>
      <section className="hero" style={{ minWidth:0 }}>
        <motion.h2 className="h-super" initial={{y:16, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6, ease:'easeOut'}}>
          Building resilient schools & campuses across Punjab
        </motion.h2>

        <motion.p className="h-sub" initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.08}}>
          An interactive disaster preparedness platform — localized drills, AR simulations, and real-time alerts — designed for schools & colleges in Punjab.
        </motion.p>

        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <motion.button className="btn btn-primary" whileHover={{ scale:1.03 }} whileTap={{ scale:0.98 }} onClick={() => setShowLogin(true)}>
            Start Learning
          </motion.button>
          <motion.button className="btn btn-ghost" whileHover={{ scale:1.03 }}>
            Explore Map
          </motion.button>
        </div>

        <div className="features" aria-hidden="true" style={{marginTop:28}}>
          <div className="feature-pill">Interactive drills</div>
          <div className="feature-pill">Localized lessons</div>
          <div className="feature-pill">Push alerts & drills</div>
          <div className="feature-pill">Admin analytics</div>
        </div>

        <p className="hero-foot">Designed for students, teachers, and administrators — offline-ready & accessible.</p>
      </section>

      <aside className="scene-card" role="img" aria-label="3D illustration">
        <Suspense fallback={<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>Loading visual...</div>}>
          <ThreeScene />
        </Suspense>
      </aside>

      {showLogin && (
        <div aria-modal="true" role="dialog" style={{
          position:'fixed', inset:0, display:'grid', placeItems:'center', zIndex:50
        }}>
          <div onClick={() => setShowLogin(false)} style={{
            position:'absolute', inset:0, backdropFilter:'blur(6px)', background:'rgba(0,0,0,0.35)'
          }} />
          <motion.div initial={{ scale:0.96, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ type:'spring', stiffness:280, damping:26 }}
            style={{ position:'relative', zIndex:51, background:'white', borderRadius:12, width:'min(92vw, 440px)',
              boxShadow:'0 10px 30px rgba(0,0,0,0.25)', overflow:'hidden' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 16px', borderBottom:'1px solid #eee' }}>
              <h3 style={{ margin:0, fontSize:18, fontWeight:700 }}>Login</h3>
              <button onClick={() => setShowLogin(false)} aria-label="Close" style={{ border:'none', background:'transparent', fontSize:18, cursor:'pointer' }}>×</button>
            </div>
            <div style={{ padding:16 }}>
              <AuthCard defaultTab="login" />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}