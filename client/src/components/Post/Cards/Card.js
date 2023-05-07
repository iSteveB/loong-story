import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateParser } from '../../utils';
import { updatePost } from '../../../features/postsSlices';
import DeleteCard from './DeleteCard';
import FollowHandler from '../../Profil/FollowHandler';
import LikeButton from '../LikeButton';
import axios from 'axios';
import CardComments from './CardComments';

const Card = ({ post }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const usersData = useSelector((state) => state.users.users);
    const userData = useSelector((state) => state.user.user);
    const userId = useSelector((state) => state.userId.userId);
    const dispatch = useDispatch();

    const updatePostText = async () => {
        if (textUpdate) {
            axios({
                method: 'put',
                url: `${process.env.REACT_APP_API_URL}/api/post/${post._id}`,
                data: { message: textUpdate },
            })
                .then(() => {
                    dispatch(updatePost({ textUpdate, postId: post._id }));
                })
                .catch((error) => console.log(error));
        }
        setIsUpdating(false);
    };

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
                                    } else return null;
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
                                        } else return null;
                                    })}
                                    {post.posterId !== userData?._id && (
                                        <FollowHandler
                                            followId={post.posterId}
                                            type={
                                                userId ? 'card' : 'disconnect'
                                            }
                                        />
                                    )}
                                </h3>
                            </div>
                            <span>{dateParser(post.createdAt)}</span>
                        </div>
                        {isUpdating === false && <p>{post.message}</p>}
                        {isUpdating && (
                            <div className='update-post'>
                                <textarea
                                    defaultValue={post.message}
                                    onChange={(e) =>
                                        setTextUpdate(e.target.value)
                                    }
                                />
                                <div className='button-container'>
                                    <button
                                        className='btn'
                                        onClick={updatePostText}>
                                        Valider les modifications
                                    </button>
                                </div>
                            </div>
                        )}
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
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen></iframe>
                        )}
                        {userData?._id === post.posterId && (
                            <div className='button-container'>
                                <div onClick={() => setIsUpdating(!isUpdating)}>
                                    <img
                                        src='./img/icons/edit.svg'
                                        alt='edit'
                                    />
                                </div>
                                <DeleteCard postId={post._id} />
                            </div>
                        )}
                        <div className='card-footer'>
                            <div
                                onClick={() => setShowComments(!showComments)}
                                className='comment-icon'>
                                <img
                                    src='./img/icons/message1.svg'
                                    alt='comment'
                                />
                                <span>{post.comments.length}</span>
                            </div>
                            <LikeButton post={post} />
                            <img src='./img/icons/share.svg' alt='share' />
                        </div>
                        {showComments && <CardComments post={post} />}
                    </div>
                </>
            )}
        </li>
    );
};

export default Card;
