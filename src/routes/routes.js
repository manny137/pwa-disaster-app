import Map from "../features/map/index.jsx";
import Modules from "../features/modules/index.jsx";
import Quizzes from "../features/quizzes/index.jsx";
import Drills from "../features/drills/index.jsx";
import Admin from "../features/admin/index.jsx";

export const routes = [
  { path: "map", element: <Map /> },
  { path: "modules", element: <Modules /> },
  { path: "quizzes", element: <Quizzes /> },
  { path: "drills", element: <Drills /> },
  { path: "admin", element: <Admin /> },
];
