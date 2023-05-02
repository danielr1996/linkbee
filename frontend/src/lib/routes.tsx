import { createBrowserRouter, } from "react-router-dom";
import { Dashboard } from '../modules/dashboard/Dashboard';
import { Wrapper } from "./Wrapper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            }
        ]
    },
]);