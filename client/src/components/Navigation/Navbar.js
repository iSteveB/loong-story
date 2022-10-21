import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from '../Log/Logout';

const Navbar = () => {
    const userId = useSelector(state => state.userId.userId);
    const userPseudo = useSelector(state => {
        if(state.user.user !== null) return state.user.user.pseudo
    })

    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <NavLink to='/'>
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
                            <NavLink to='/profil'>
                                <h5>Bienvenue {userPseudo}</h5>
                            </NavLink>
                        </li>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink to='/profil'>
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
