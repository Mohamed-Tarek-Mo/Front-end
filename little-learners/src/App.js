import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Academics from "./pages/AcademicPage";
import Error from "./pages/Error";

export default function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/academics", element: <Academics /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}
