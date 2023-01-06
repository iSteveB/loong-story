import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FollowHandler from './FollowHandler';

const FriendsHints = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [playOnce, setPlayOnce] = useState(true);
    const [friendsHint, setFriendsHint] = useState([]);
    const usersData = useSelector((state) => state.users.users);
    const userData = useSelector((state) => state.user.user);

    useEffect(() => {
        const notFriendList = () => {
            let notFriendArray = [];
            usersData.map((user) => {
                if (
                    user._id !== userData._id &&
                    !user.followers.includes(userData._id)
                ) {
                    return notFriendArray.push(user._id);
                } else return null;
            });

            notFriendArray.sort(() => 0.5 - Math.random());
            notFriendArray.length = 10
            setFriendsHint(notFriendArray);
        };

        if (playOnce && usersData && userData) {
            notFriendList();
            setIsLoading(false);
            setPlayOnce(false);
        }
    }, [usersData, userData, playOnce]);

    return (
        <div className="get-friends-container">
            <h4>Suggestions</h4>
            {isLoading ? (
                <div className="icon">
                    <i className="fas fa-spinner fa-pulse"></i>
                </div>
            ) : (
                <ul>
                    {friendsHint && friendsHint.map(user => {
                        for (let i= 0; i < usersData.length; i++){
                            if (user === usersData[i]._id){
                                return (
                                    <li className="user-hint" key={user}>
                                        <img src={usersData[i].picture} alt="user-pic" />
                                        <p>{usersData[i].pseudo}</p>
                                        <FollowHandler followId={usersData[i]._id} type="suggestion" />
                                    </li>
                                )
                            }
                        }
                    })}
                </ul>
            )}
        </div>
    );
};

export default FriendsHints;
