import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './auth/login';
import Dashboard from './Dashboard';
let router = createBrowserRouter([
    {
        /* Creamos una ruta para el element Login*/
        element: <Login />,
        /*Esto detecta lo que esta en el login*/
        path: '/login',
    },
    {
        element: <Dashboard />,
        path: '/',
    },
]);

const Home = () => {
    return (
        <RouterProvider router={router} />
    );
};
export default Home;