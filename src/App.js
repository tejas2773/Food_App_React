import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contacts";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./Redux/store";

const AppLayout = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <Outlet />   {/** outlet helps to render children components without rendering parent componet (<applayout/>) */}
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/restaurent/:resId",  // ":" states resId is dynamic url 
                element: <RestaurentMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(

    <RouterProvider router={appRouter} />

)
