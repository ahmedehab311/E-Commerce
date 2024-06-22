import { MainLayout } from "@layOuts/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import Prodects from "@pages/prodects";
import AboutUs from "@pages/AboutUs";
import Login from "@pages/login";
import Register from "@pages/register";
import Error from "@pages/Error";
function appRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "Categories",
          element: <Categories />,
        },

        {
          path: "categories/Prodects/:perfix",
          element: <Prodects />,
          loader: ({ params }) => {
            if (
              typeof params.perfix !== "string" ||
              !/^[a-z]+/i.test(params.perfix)
            ) {
              throw new Response("bad request", {
                statusText: "category Not Found",
                status: 400,
              });
            }
            return true;
          },
        },

        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default appRouter;
