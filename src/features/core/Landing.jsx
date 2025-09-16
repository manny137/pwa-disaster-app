import React, { Suspense } from "react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene"; // the 3D canvas component we'll create
import "../../index.css";

export default function Landing(){
  return (
    <div className="landing">
      <section className="hero" style={{ minWidth:0 }}>
        <motion.h2 className="h-super" initial={{y:16, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6, ease:'easeOut'}}>
          Building resilient schools & campuses across Punjab
        </motion.h2>

        <motion.p className="h-sub" initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.08}}>
          An interactive disaster preparedness platform — localized drills, AR simulations, and real-time alerts — designed for schools & colleges in Punjab.
        </motion.p>

        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <motion.button className="btn btn-primary" whileHover={{ scale:1.03 }} whileTap={{ scale:0.98 }}>
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
    </div>
  );
}