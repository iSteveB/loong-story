import { useSelector } from 'react-redux';
import Log from '../components/Log';

const Profil = () => {
    const userId = useSelector(state => state.userId.userId);

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
