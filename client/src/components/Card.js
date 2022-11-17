import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dateParser } from './utils';
import FollowHandler from '../components/Profil/FollowHandler';

const Card = ({ post }) => {
    const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.users.users);
    const userData = useSelector((state) => state.user.user);

    useEffect(() => {
        if (usersData) setIsLoading(false);
    }, [usersData]);

    return (
        <li className='card-container' key={post._id}>
            {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i>
            ) : (
                <>
                    <div className='card-left'>
                        <img
                            src={usersData
                                ?.map((user) => {
                                    if (user._id === post.posterId) {
                                        return user.picture;
                                    }
                                })
                                .join('')}
                            alt='poster-pic'
                        />
                    </div>
                    <div className='card-right'>
                        <div className='card-header'>
                            <div className='pseudo'>
                                <h3>
                                    {usersData?.map((user) => {
                                        if (user._id === post.posterId) {
                                            return user.pseudo;
                                        }
                                    })}
                                    {post.posterId !== userData?._id && (
                                        <FollowHandler
                                            followId={post.posterId}
                                            type={'card'}
                                        />
                                    )}
                                </h3>
                            </div>
                            <span>{dateParser(post.createdAt)}</span>
                        </div>
                        <p>{post.message}</p>
                        {post.picture && (
                            <img
                                src={post.picture}
                                alt='card-pic'
                                className='card-pic'
                            />
                        )}
                        {post.video && (
                            <iframe
                            title={post._id}
                                width='500'
                                height='300'
                                src={post.video}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen></iframe>
                        )}
                        <div className="card-footer">
                            <div className="comment-icon">
                                <img src="./img/icons/message1.svg" alt="comment" />
                                <span>{post.comments.length}</span>
                            </div>
                            <h6>Like Button</h6>
                            <img src="./img/icons/share.svg" alt="share" />
                        </div>
                    </div>
                </>
            )}
        </li>
    );
};

export default Card;
