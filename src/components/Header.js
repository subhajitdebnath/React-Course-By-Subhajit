import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
        <div className='head'>
            <div className='header-logo'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-item-container'>
                <ul>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;