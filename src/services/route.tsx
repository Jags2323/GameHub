import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import GameDetailsPage from "../pages/GameDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: 'home/', element: <Layout /> },
//     ],
//   },
// ]);

// export default router;
