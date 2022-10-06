import { useContext } from 'react';
import Log from '../components/Log';
import { UserIdContext } from '../Context/AppContext';

const Profil = () => {
    const userId = useContext(UserIdContext);

    return (
        <div className='profil-page'>
            {userId ? (
                <h1>UPDATE PAGE</h1>
            ) : (
                <div className='log-container'>
                    <Log logIn={false} signUp={true} />
                    <div className='img-container'>
                        <img src='./img/log.svg' alt='log-img' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profil;
