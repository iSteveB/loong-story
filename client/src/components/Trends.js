import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrends } from '../features/trendsSlices';
import { NavLink } from 'react-router-dom';
import { isEmpty } from './utils';

const Trends = () => {
    const allPosts = useSelector((state) => state.posts.allPosts);
    const usersData = useSelector((state) => state.users.users);
    const trendList = useSelector((state) => state.trends.trends);
    const dispatch = useDispatch();

    useEffect(() => {
        if (allPosts) {
            const postsArray = Object.keys(allPosts).map((i) => allPosts[i]);

            let sortedArray = postsArray.sort((a, b) => {
                return b.likers.length - a.likers.length;
            });

            sortedArray.length = 3;
            dispatch(getTrends(sortedArray));
        }
    }, [allPosts, dispatch]);

    return (
        <div className='trending-container'>
            <h4>Trending</h4>
            <NavLink to='/trending'>
                <ul>
                    {trendList &&
                        trendList.map((post) => {
                            return (
                                <li key={post._id}>
                                    <div>
                                        {post.picture && (
                                            <img
                                                src={post.picture}
                                                alt='post-pic'
                                            />
                                        )}
                                        {post.video && (
                                            <iframe
                                                title={post._id}
                                                width='500'
                                                height='300'
                                                src={post.video}
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowFullScreen></iframe>
                                        )}
                                        {isEmpty(post.picture) &&
                                            isEmpty(post.video) && (
                                                <img
                                                    src={
                                                        usersData ?
                                                        usersData.map(
                                                            (user) => {
                                                                if (
                                                                    user._id ===
                                                                    post.posterId
                                                                ) {
                                                                    return user.picture;
                                                                } else {
                                                                    return null;
                                                                }
                                                            }
                                                        ).join('') : null
                                                    }
                                                    alt='user-profil'
                                                />
                                            )}
                                    </div>
                                    <div className="trend-content">
                                        <p>{post.message}</p>
                                        <span>Lire</span>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </NavLink>
        </div>
    );
};

export default Trends;
