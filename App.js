import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src='https://png.pngtree.com/png-clipart/20220705/original/pngtree-fast-food-logo-png-image_8330083.png' />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>Class</li>
            </ul>
        </div>
    </div>
)

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);