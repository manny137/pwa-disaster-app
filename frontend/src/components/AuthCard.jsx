import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Input from "./Input";
import { loginUser, registerUser } from "../store/api";

export default function AuthCard({ defaultTab = "login" }){
  const [tab, setTab] = useState(defaultTab);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [regForm, setRegForm] = useState({ name: "", email: "", password: "" });

  const submitLogin = async (e) => {
    e.preventDefault(); setMsg(""); setLoading(true);
    try {
      const res = await loginUser(loginForm);
      localStorage.setItem("token", res.data.token);
      setMsg("Welcome back!");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    } finally { setLoading(false); }
  };

  const submitRegister = async (e) => {
    e.preventDefault(); setMsg(""); setLoading(true);
    try {
      const res = await registerUser(regForm);
      setMsg(res.data?.message || "Registered!");
      setTab("login");
    } catch (err) {
      setMsg(err.response?.data?.message || "Register failed");
    } finally { setLoading(false); }
  };

  return (
    <motion.div layout style={{ width: "min(94vw, 520px)", background: "var(--card)", borderRadius: 16, boxShadow: "var(--shadow)", border: "1px solid var(--border)" }}>
      <div style={{ display: "flex", gap: 6, padding: 8, borderBottom: "1px solid var(--border)" }}>
        {[
          { key: "login", label: "Login" },
          { key: "register", label: "Register" },
        ].map((t) => (
          <motion.button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="btn btn-ghost"
            style={{ padding: "10px 12px", borderRadius: 10, position: "relative" }}
            whileHover={{ scale: 1.03 }}
          >
            <span style={{ fontWeight: 800, color: tab === t.key ? "var(--text)" : "var(--muted)" }}>{t.label}</span>
            {/* Removed underline for cleaner look */}
          </motion.button>
        ))}
      </div>

      <div style={{ padding: 16 }}>
        {msg && <div style={{ marginBottom: 10, color: "var(--muted)" }}>{msg}</div>}
        <AnimatePresence mode="wait">
          {tab === "login" ? (
            <motion.form key="login" onSubmit={submitLogin} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Input label="Email" type="email" name="email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} />
              <Input label="Password" type="password" name="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
              <Button type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</Button>
            </motion.form>
          ) : (
            <motion.form key="register" onSubmit={submitRegister} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Input label="Name" name="name" value={regForm.name} onChange={(e) => setRegForm({ ...regForm, name: e.target.value })} />
              <Input label="Email" type="email" name="email" value={regForm.email} onChange={(e) => setRegForm({ ...regForm, email: e.target.value })} />
              <Input label="Password" type="password" name="password" value={regForm.password} onChange={(e) => setRegForm({ ...regForm, password: e.target.value })} />
              <Button type="submit" disabled={loading}>Create account</Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}


