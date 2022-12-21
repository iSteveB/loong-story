import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import FollowHandler from '../../Profil/FollowHandler';
import { timestampParser } from '../../utils';
import { getPosts, addComments } from '../../../features/postsSlices';
import EditDeleteComment from './EditDeleteComment';

const CardComments = ({ post }) => {
    const [comment, setComment] = useState('');
    const usersData = useSelector((state) => state.users.users);
    const userData = useSelector((state) => state.user.user);
    const userId = useSelector((state) => state.userId.userId);
    const dispatch = useDispatch();

    const handleComment = (e) => {
        e.preventDefault();

        if (comment) {
            axios({
                method: 'patch',
                url: `${process.env.REACT_APP_API_URL}api/post/comment-post/${post._id}`,
                data: {
                    text: comment,
                    commenterId: userId,
                    commenterPseudo: userData.pseudo,
                },
            })
                .then(() => {
                    dispatch(addComments(post._id));
                    axios
                        .get(`${process.env.REACT_APP_API_URL}api/post/`)
                        .then((res) =>
                            dispatch(getPosts({ data: res.data }))
                        )
                        .catch((error) => console.log(error));
                    setComment('');
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className='comments-container'>
            {post?.comments.map((comment) => {
                return (
                    <div
                        className={
                            comment.commenterId === userId
                                ? 'comment-container client'
                                : 'comment-container'
                        }
                        key={comment._id}>
                        <div className='left-part'>
                            <img
                                src={usersData
                                    ?.map((user) => {
                                        if (user._id === comment.commenterId) {
                                            return user.picture;
                                        } else return null;
                                    })
                                    .join('')}
                                alt='commenter-pic'
                            />
                        </div>
                        <div className='right-part'>
                            <div className='comment-header'>
                                <div className='pseudo'>
                                    <h3>{comment.commenterPseudo}</h3>
                                    {comment.commenterId !== userId && (
                                        <FollowHandler
                                            followId={comment?.commenterId}
                                            type={
                                                userId ? 'card' : 'disconnect'
                                            }
                                        />
                                    )}
                                </div>
                                <span>
                                    {timestampParser(comment.timestamp)}
                                </span>
                            </div>
                            <p>{comment.text}</p>
                            <EditDeleteComment comment={comment} postId={post._id} />
                        </div>
                    </div>
                );
            })}
            {userId && (
                <form onSubmit={handleComment} className='comment-form'>
                    <input
                        type='text'
                        name='text'
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        placeholder='Laisser un commentaire'
                    />
                    <br />
                    <input type='submit' value='Envoyer' />
                </form>
            )}
        </div>
    );
};

export default CardComments;
