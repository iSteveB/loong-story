import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBio } from '../../features/userSlices';
import LeftNav from '../Navigation/LeftNav';
import UploadImg from './UploadImg';
import { dateParser } from '../utils';
import FollowHandler from './FollowHandler';

const UpdateProfil = () => {
    const [bio, setBio] = useState('');
    const [updateForm, setUpdateForm] = useState(false);
    const [followingPopup, setFollowingPopup] = useState(false);
    const [followersPopup, setFollowersPopup] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.user);
    const usersData = useSelector((state) => state.users.users);
    const userId = useSelector((state) => state.userId.userId);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios({
            method: 'put',
            url: `${process.env.REACT_APP_API_URL}api/user/${userId}`,
            data: { bio },
        })
            .then(() => {
                dispatch(updateBio(bio));
            })
            .catch((error) => console.log(error));
        setUpdateForm(!updateForm);
    };

    return (
        <div className='profil-container'>
            <LeftNav />
            <h1>Profil de {userData?.pseudo}</h1>
            <div className='update-container'>
                <div className='left-part'>
                    <h3>Photo de profil</h3>
                    <img src={userData?.picture} alt='profil' />
                    <UploadImg />
                </div>
                <div className='right-part'>
                    <div className='bio-update'>
                        <h3>Bio</h3>
                        {updateForm === false && (
                            <>
                                <p onClick={() => setUpdateForm(!updateForm)}>
                                    {userData?.bio}
                                </p>
                                <button
                                    onClick={() => setUpdateForm(!updateForm)}>
                                    Modifier la bio
                                </button>
                            </>
                        )}
                        {updateForm && (
                            <>
                                <textarea
                                    typeof='text'
                                    defaultValue={userData?.bio}
                                    onChange={(e) =>
                                        setBio(e.target.value)
                                    }></textarea>
                                <button onClick={handleUpdate}>
                                    {' '}
                                    Valider modifications
                                </button>
                            </>
                        )}
                    </div>
                    <h4>
                        {' '}
                        Membre depuis le : {dateParser(userData?.createdAt)}
                    </h4>
                    <h5 onClick={() => setFollowingPopup(true)}>
                        Abonnements : {userData?.following.length}
                    </h5>
                    <h5 onClick={() => setFollowersPopup(true)}>
                        Abonnés : {userData?.followers.length}
                    </h5>
                </div>
            </div>
            {followingPopup && (
                <div className='popup-profil-container'>
                    <div className='modal'>
                        <h3>Abonnements</h3>
                        <span
                            className='cross'
                            onClick={() => setFollowingPopup(false)}>
                            &#10005;
                        </span>
                        <ul>
                            {usersData?.map((user) => {
                                for (
                                    let i = 0;
                                    i < userData.following.length;
                                    i++
                                ) {
                                    if (user._id === userData.following[i]) {
                                        return (
                                            <li key={user._id}>
                                                <img
                                                    src={user.picture}
                                                    alt='profil'
                                                />
                                                <h4>{user.pseudo}</h4>
                                                <FollowHandler />
                                            </li>
                                        );
                                    }
                                }
                            })}
                        </ul>
                    </div>
                </div>
            )}
            {followersPopup && (
                <div className='popup-profil-container'>
                    <div className='modal'>
                        <h3>Abonnés</h3>
                        <span
                            className='cross'
                            onClick={() => setFollowersPopup(false)}>
                            &#10005;
                        </span>
                        <ul>
                            {usersData?.map((user) => {
                                for (
                                    let i = 0;
                                    i < userData.followers.length;
                                    i++
                                ) {
                                    if (user._id === userData.followers[i]) {
                                        return (
                                            <li key={user._id}>
                                                <img
                                                    src={user.picture}
                                                    alt='profil'
                                                />
                                                <h4>{user.pseudo}</h4>

                                                <div className='follow-handler'>
                                                    <FollowHandler
                                                        idToFollow={user._id}
                                                    />
                                                </div>
                                            </li>
                                        );
                                    }
                                }
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateProfil;
