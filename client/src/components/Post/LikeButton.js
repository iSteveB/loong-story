import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, unlikePost } from '../../features/postsSlices';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const LikeButton = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);
    const userId = useSelector((state) => state.userId.userId);
    const dispatch = useDispatch();

    const like = () => {
        axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}/api/post/like-post/${post._id}`,
            data: { id: userId },
        })
            .then(() => dispatch(likePost({ userId, postId: post._id })))
            .catch((error) => console.log(error));

        setIsLiked(true);
    };

    const unlike = () => {
        axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}/api/post/unlike-post/${post._id}`,
            data: { id: userId },
        })
            .then(() => dispatch(unlikePost({ userId, postId: post._id })))
            .catch((error) => console.log(error));

        setIsLiked(false);
    };

    useEffect(() => {
        if (post.likers.includes(userId)) {
            setIsLiked(true);
        } else setIsLiked(false)
    }, [userId, post.likers, isLiked]);

    return (
        <div className='like-container'>
            {userId === null && (
                <Popup
                    trigger={<img src='./img/icons/heart.svg' alt='like' />}
                    position={['bottom center', 'bottom right', 'bottom left']}
                    closeOnDocumentClick>
                    <div>Connectez-vous pour aimer un post !</div>
                </Popup>
            )}
            {userId && isLiked === false && (
                <img src='./img/icons/heart.svg' onClick={like} alt='like' />
            )}
            {userId && isLiked && (
                <img
                    src='./img/icons/heart-filled.svg'
                    onClick={unlike}
                    alt='unlike'
                />
            )}
            <span>{post.likers.length}</span>
        </div>
    );
};

export default LikeButton;
