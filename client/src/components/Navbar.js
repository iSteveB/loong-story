import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserIdContext } from '../Context/AppContext';
import Logout from './Log/Logout';

const Navbar = () => {
    const userId = useContext(UserIdContext);

    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <NavLink exact to='/'>
                        <div className='logo'>
                            <img src='./img/icon.png' alt='icon' />
                            <h3>Loong Story</h3>
                        </div>
                    </NavLink>
                </div>
                {userId ? (
                    <ul>
                        <li></li>
                        <li className='welcome'>
                            <NavLink exact to='/profil'>
                                <h5>Bienvenue SteveLine</h5>
                            </NavLink>
                        </li>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink exact to='/profil'>
                                <img src='./img/icons/login.svg' alt='login' />
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
