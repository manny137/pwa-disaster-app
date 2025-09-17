import Landing from "../features/core/Landing.jsx";
import Map from "../features/map/index.jsx";
import Modules from "../features/modules/index.jsx";
import Quizzes from "../features/quizzes/index.jsx";
import Drills from "../features/drills/index.jsx";
import Admin from "../features/admin/index.jsx";
import Register from "../features/core/Register";
import Login from "../features/core/Login";

export const routes = [
  { path: "", element: <Landing /> },       // root home
  { path: "map", element: <Map /> },
  { path: "modules", element: <Modules /> },
  { path: "quizzes", element: <Quizzes /> },
  { path: "drills", element: <Drills /> },
  { path: "admin", element: <Admin /> },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
];