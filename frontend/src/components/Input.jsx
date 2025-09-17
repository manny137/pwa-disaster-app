import React from "react";

export default function Input({ label, type = "text", style, ...rest }){
  const base = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: "var(--input-bg)",
    color: "var(--text)",
    outline: "none",
    transition: "border .2s ease, box-shadow .2s ease",
  };

  const onFocus = (e) => {
    e.target.style.boxShadow = "0 0 0 4px var(--focus-ring)";
    e.target.style.borderColor = "var(--accent-2)";
  };
  const onBlur = (e) => {
    e.target.style.boxShadow = "none";
    e.target.style.borderColor = "var(--border)";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>{label}</label>
      )}
      <input onFocus={onFocus} onBlur={onBlur} type={type} style={{ ...base, ...style }} {...rest} />
    </div>
  );
}



