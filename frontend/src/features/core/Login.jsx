import React from "react";
import AuthCard from "../../components/AuthCard";

export default function Login(){
  return (
    <div style={{ display:"grid", placeItems:"center", padding:"24px 16px", minHeight:"calc(100vh - 80px)" }}>
      <AuthCard defaultTab="login" />
    </div>
  );
}