import React from 'react';
import { useSelector } from 'react-redux';
import LeftNav from '../components/Navigation/LeftNav'
import Card from '../components/Post/Cards/Card';
import FriendsHint from '../components/Profil/FriendsHint';
import Trends from '../components/Trends';
import { isEmpty } from '../components/utils';

const Trending = () => {
    const userId = useSelector((state) => state.userId.userId);
    const trendList = useSelector((state) => state.trends.trends);

    return (
        <div className="trending-page">
            <LeftNav />
            <div className="main">
                <ul>
                    {!isEmpty(trendList[0]) && trendList.map(post => {
                       return <Card post={post} key={post._id} /> 
                    })}
                </ul>
            </div>
            <div className="right-side">
                <div className="right-side-container">
                    <Trends />
                    {userId && <FriendsHint />}
                </div>
            </div>
        </div>
        );
};

export default Trending;
