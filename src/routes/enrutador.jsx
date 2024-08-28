import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './auth/login';
let router = createBrowserRouter([
    {
        /* Creamos una ruta para el element Login*/
        element: <Login />,
        /*Esto detecta lo que esta en el login*/
        path: '/login',
    },
]);
export default router;