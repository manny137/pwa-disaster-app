import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const routing = useRoutes(routes);
  return routing;
}

export default App
