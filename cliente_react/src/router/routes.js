import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const routes = [
  { name: "Home Page", path: "/", element: HomePage },
  { name: "Login Page", path: "/login", element: LoginPage },
  { name: "Cities Search Page", path: "/cities", requireAuth: true, element: LoginPage },
  { name: "Cities Register Page", path: "/cities/new", requireAuth: true, element: LoginPage },
];

export default routes;
