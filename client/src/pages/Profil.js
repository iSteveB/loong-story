import React from 'react';
import Log from '../components/Log';

const Profil = () => {
    return (
        <div className='profil-page'>
            <div className="log-container">
                <Log login={false} signup={true} />
                <div className="img-container">
                    <img src="./img/log.svg" alt="log img" />
                </div>
            </div>
        </div>
    );
};

export default Profil;