import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LeftNav from '../Navigation/LeftNav';
import UploadImg from './UploadImg';

const UpdateProfil = () => {
    const [bio, setBio] = useState('');
    const [updateForm, setUpdateForm] = useState(false);
    const userData = useSelector((state) => state.user.user);

    return (
        <div className='profil-container'>
            <LeftNav />
            <h1>Profil de {userData?.pseudo}</h1>
            <div className='update-container'>
                <div className='left-part'>
                    <h3>Photo de profil</h3>
                    <img
                        src={ userData?.picture }
                        alt='profil'
                    />
                    <UploadImg />
                </div>

                
                
            </div>
        </div>
    );
};

export default UpdateProfil;
