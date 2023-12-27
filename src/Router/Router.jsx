import {
    createBrowserRouter,

} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Res/Register";
import PrivetRoute from "./PrivetRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashbord from "../Layout/Dashbord";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AlUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <Menu></Menu>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "secret",
                element: <PrivetRoute><Secret></Secret></PrivetRoute>
            },

        ]
    },
    {
        path: "dashboard",
        element: <PrivetRoute><Dashbord></Dashbord></PrivetRoute>,
        children: [
            // normal user  routes
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            // only admin route
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItem></ManageItem> </AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);