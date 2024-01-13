import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Home from "../../pages/Home/Home.jsx";
import Axios from "../../pages/Axios/Axios.jsx";
import Student from "../../pages/Student/Student.jsx";

const routes = [
    {
        name: "Dashboard",
        key: 'dashboard',
        path: '/dashboard',
        component: <Dashboard/>
    },
    {
        name: "Home",
        key: 'home',
        path: '/home',
        component: <Home/>
    },
    {
        name: "Axios",
        key: 'axios',
        path: '/axios',
        component: <Axios/>
    },
    {
        name: "Student",
        key: 'student',
        path: '/student',
        component: <Student/>
    },
];

export default routes;
