import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import Button from '../components/Button';

// Componente layout para aplicar el tema y mostrar el botón en todas las páginas
const Layout = () => {
    const { theme } =  useContext(ThemeContext);


    return (
        <section className={`App ${theme}`}>
            <nav>
                <a href="/">Home</a> | 
                <a href="/myjob">MyJob</a> | 
                <a href="/profile">Profile</a>
            </nav>
            <Button />
            <Outlet /> {/* Aquí se renderizarán las páginas */}
        </section>
    );
};


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Aplicamos el layout
        children: [
            { path: '/', element: <Home /> },
            { path: '/myjob', element: <MyJob /> },
            { path: '/profile', element: <Profile /> },
        ],
    },
]);

const RoutesApp = () => {
    return <RouterProvider router={router} />;
};

export default RoutesApp;


