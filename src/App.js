import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import RestaurantDetail from './components/RestaurantDetail';

const App = () => {
    return (
        <div className='main'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },{
                path: "/about",
                element: <About />
            },{
                path: '/restaurant/:id',
                element: <RestaurantDetail />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);