import HomePage from "./routes/homePage/homePage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "./routes/layout/layout";
import Login from "./routes/login/login";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Register from "./routes/Register/register";

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
          path:"/home",
          element:<HomePage/>
        },
        {
          path:"/login",
          element:<Login/>
        }, 
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;