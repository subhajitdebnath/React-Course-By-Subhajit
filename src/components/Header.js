import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
        <div className='head'>
            <div className='header-logo'>
                <Link to="/">
                    <img className='logo' src={LOGO_URL} />
                </Link>
            </div>
            <div className='nav-item-container'>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;