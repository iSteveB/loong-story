import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editComments, deleteComment } from '../../../features/postsSlices';

const EditDeleteComment = ({ comment, postId }) => {
    const [isAuhtor, setIsAuthor] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [textUpdated, setTextUpdated] = useState('');
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userId.userId);

    const handleEdit = (e) => {
        e.preventDefault();

        if (textUpdated) {
            axios({
                method: 'patch',
                url: `${process.env.REACT_APP_API_URL}api/post/edit-comment-post/${postId}`,
                data: { commentId: comment._id, text: textUpdated },
            }).then(() => {
                dispatch(
                    editComments({
                        postId: postId,
                        commentId: comment._id,
                        text: textUpdated,
                    })
                );
                setTextUpdated('');
                setIsEditing(false);
            });
        }
    };

    const handleDelete = () => {
    
        axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/delete-comment-post/${postId}`,
            data: { commentId: comment._id },
        })
            .then(() => {
                dispatch(deleteComment({commentId: comment._id, postId}));
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        const checkAuthor = () => {
            if (userId === comment.commenterId) {
                setIsAuthor(true);
            }
        };
        checkAuthor();
    }, [userId, comment.commenterId]);

    return (
        <div className='edit-comment'>
            {isAuhtor && isEditing === false && (
                <span onClick={() => setIsEditing(!isEditing)}>
                    <img src='./img/icons/edit.svg' alt='edit-comment' />
                </span>
            )}
            {isAuhtor && isEditing && (
                <form className='edit-comment-form' onSubmit={handleEdit}>
                    <label
                        htmlFor='text'
                        onClick={() => setIsEditing(!isEditing)}>
                        Editer
                    </label>
                    <br />
                    <input
                        type='text'
                        name='text'
                        onChange={(e) => setTextUpdated(e.target.value)}
                        defaultValue={comment.text}
                    />
                    <br />
                    <div className='btn'>
                        <span
                            onClick={() => {
                                if (
                                    window.confirm(
                                        'Voulez-vous supprimer ce commentaire ?'
                                    )
                                ) {
                                    handleDelete();
                                }
                            }}>
                            <img src='./img/icons/trash.svg' alt='delete' />
                        </span>
                        <input
                            type='submit'
                            value='Valider les modifications'
                        />
                    </div>
                </form>
            )}
        </div>
    );
};

export default EditDeleteComment;
