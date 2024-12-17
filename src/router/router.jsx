import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import JobDatails from "../pages/JobDatails/JobDatails";
import PrivetRout from "./PrivetRout";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import VewApplication from "../pages/VewApplication/VewApplication";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobs/:id',
                element: <PrivetRout><JobDatails /></PrivetRout>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivetRout><JobApply /></PrivetRout>
            }, 
            {
                path: '/myApplication',
                element: <PrivetRout><MyApplication /></PrivetRout>
            }, 
            {
                path: '/myPostedJobs',
                element: <PrivetRout><MyPostedJobs /></PrivetRout>
            }, 
            {
                path: '/vewApplication/:jobs_id',
                element: <PrivetRout><VewApplication/></PrivetRout>,
                loader: ({params}) => fetch(`http://localhost:5000/jobApplications/jobs/${params.jobs_id}`)
            }, 
            {
                path: '/addJob',
                element: <PrivetRout><AddJob /></PrivetRout>
            },       
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
]);

export default router;