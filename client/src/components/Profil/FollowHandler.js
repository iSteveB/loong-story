import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const FollowHandler = ({ idToFollow }) => {
    const userData = useSelector((state) => state.user.user);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {};

    const handleUnfollow = () => {};

    useEffect(() => {
        if (userData?.following.includes(idToFollow)) {
            setIsFollowed(true);
        } else setIsFollowed(false);
    }, [userData, idToFollow]);

    return (
        <>
            {isFollowed ? (
                <span>
                    <button className='unfollow-btn'>Abonné</button>
                </span>
            ) : (
                <span>
                    <button className='follow-btn'>Suivre</button>
                </span>
            )}

        </>
    );
};

export default FollowHandler;
