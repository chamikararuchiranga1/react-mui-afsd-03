import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Home from "../../pages/Home/Home.jsx";
import Axios from "../../pages/Axios/Axios.jsx";

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
];

export default routes;
