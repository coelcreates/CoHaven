import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                
                <li>
                    <Link to="/aboutus">About CoHaven</Link>
                </li>

                <li>
                    <Link to="/schedule">Schedule</Link>
                </li>

                <li>
                    <Link to="/virtualHaven">Virtual Haven</Link>
                </li>

                <li>
                    <Link to="/shop">Shop With Us</Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar;