import HomePage from "./routes/homePage/homePage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "./routes/layout/layout";
import Login from "./routes/login/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;