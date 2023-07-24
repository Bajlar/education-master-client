import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CartDetails from "../pages/Home/CollageCart/CartDetails";
import Collages from "../pages/Collages/Collages";
import CollageInfo from "../pages/Collages/CollageInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collages",
        element: <Collages />,
      },
      {
        path: "/collageInfo/:id",
        element: <CollageInfo />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/collage/${params.id}`),
      },
      {
        path: "/cartDetails/:id",
        element: <CartDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/collage/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;