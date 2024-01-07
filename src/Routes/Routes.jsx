import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main Laytout/Main";
import Home from "../Home/Home";
import AddMore from "../Add More/AddMore";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addmore",
          element: <AddMore></AddMore>,
        },
      ],
    },
  ]);

  export default router