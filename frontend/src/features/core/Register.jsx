import React from "react";
import AuthCard from "../../components/AuthCard";

export default function Register(){
  return (
    <div style={{ display:"grid", placeItems:"center", padding:"24px 16px", minHeight:"calc(100vh - 80px)" }}>
      <AuthCard defaultTab="register" />
    </div>
  );
}