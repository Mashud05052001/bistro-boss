import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1 className="font-cinzel">This is error page</h1>,
        children : [
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/contact',
                element: <h1>This is contuct us</h1>,
            },
            {
                path:'/dashboard',
                element: <h1>This is Dashboard</h1>,
            },
            {
                path:'/menu',
                element: <h1>This is our menu</h1>,
            },
            {
                path:'/shop',
                element: <h1>This is shop</h1>,
            },
            {
                path:'/login',
                element: <h1>This is login section</h1>,
            },
            {
                path:'/register',
                element: <h1>This is register section</h1>,
            },
        ]
    }
])