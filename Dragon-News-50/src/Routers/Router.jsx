import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },
  {
    path: "/auth",
    element: <h2>Auth Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
