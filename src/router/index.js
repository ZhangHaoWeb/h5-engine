import { createBrowserRouter } from "react-router-dom"
import Home from "../views/home"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/test",
      element: <div>this is test page</div>
    }
]);

export default router