import axios from 'axios';
import cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { deleteUserId } from '../../feature/userIdSlices';

const Logout = () => {
    const dispatch = useDispatch();

    const removeCookie = (key) => {
        if (window !== undefined) {
            cookie.remove(key, { expires: 1 });
        }
    };

    const logout = async () => {
        await axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true,
        })
            .then(() => removeCookie('jwt'), dispatch(deleteUserId()))
            .catch((error) => console.log(error));

        window.location = '/';
    };

    return (
        <li onClick={logout}>
            <img src='./img/icons/logout.svg' alt='logout' />
        </li>
    );
};

export default Logout;
