import React from "react";
import { motion } from "framer-motion";

export default function Button({ children, onClick, variant = "primary", style, ...rest }){
  const baseStyle = {
    padding: "10px 16px",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    letterSpacing: 0.2,
    boxShadow: "var(--shadow)",
  };

  const variants = {
    primary: {
      background: "linear-gradient(90deg, var(--btn-grad-1), var(--btn-grad-2))",
      color: "white",
    },
    ghost: {
      background: "transparent",
      color: "var(--text)",
      border: "1px solid var(--border)",
      boxShadow: "none",
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 12px 28px var(--btn-shadow)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant], ...style }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}



