import React from 'react';
import { useSelector } from 'react-redux';
import LeftNav from '../Navigation/LeftNav';
import UploadImg from './UploadImg';

const UpdateProfil = () => {
    const userData = useSelector((state) => state.user.user);
    const userPicture= useSelector((state) => state.picture.picture);

    return (
        <div className='profil-container'>
            <LeftNav />
            <h1>Profil de {userData?.pseudo}</h1>
            <div className="update-container">
                <div className="left-part">
                    <h3>Photo de profil</h3>
                    <img src={userPicture ? userPicture : "./uploads/profil/random-user.png" } alt="profil" />
                    <UploadImg />
                    {/* <p>{errors.maxSize}</p>
                    <p>{errors.format}</p> */}
                </div>
            </div>
        </div>
    );
};

export default UpdateProfil;
