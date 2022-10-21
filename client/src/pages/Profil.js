import { useSelector } from 'react-redux';
import Log from '../components/Log';
import UpdateProfil from '../components/Profil/UpdateProfil'

const Profil = () => {
    const userId = useSelector(state => state.userId.userId);

    return (
        <div className='profil-page'>
            {userId ? (
                <UpdateProfil/>
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
