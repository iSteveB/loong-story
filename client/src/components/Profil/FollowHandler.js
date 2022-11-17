import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../features/userSlices';

const FollowHandler = ({ followId, type }) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.user);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {
        axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/user/follow/${userData._id}`,
            data: { followId },
        })
            .then(() => {
                dispatch(followUser(followId));
                setIsFollowed(true);
            })
            .catch((error) => console.log(error));
    };

    const handleUnfollow = () => {
        axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/user/unfollow/${userData._id}`,
            data: { followId },
        })
            .then(() => {
                dispatch(unfollowUser(followId));
                setIsFollowed(false);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (userData?.following.includes(followId)) {
            setIsFollowed(true);
        } else setIsFollowed(false);
    }, [userData, followId]);

    return (
        <>
            {isFollowed ? (
                <span onClick={handleUnfollow}>
                    {type === 'suggestion' && (
                        <button className='unfollow-btn'>Abonné</button>
                    )}
                    {type === 'card' && (
                        <img src='./img/icons/checked.svg' alt='checked' />
                    )}
                </span>
            ) : (
                <span onClick={handleFollow}>
                    {type === 'suggestion' && (
                        <button className='follow-btn'>Suivre</button>
                    )}
                    {type === 'card' && (
                        <img src='./img/icons/check.svg' alt='check' />
                    )}
                </span>
            )}
        </>
    );
};

export default FollowHandler;
