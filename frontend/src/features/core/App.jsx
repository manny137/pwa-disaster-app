import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import { routes } from "../../routes/routes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((r, idx) => (
            <Route key={idx} index={r.path === ""} path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
