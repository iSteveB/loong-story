import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../features/postsSlices';

const DeleteCard = ({postId}) => {
    const dispatch = useDispatch();

    const deleteOnePost = () => {
        axios({
            method: 'delete',
            url: `${process.env.REACT_APP_API_URL}api/post/${postId}`
        })
        .then(() => dispatch(deletePost(postId)))
        .catch((error) => console.log(error))
    }

    return (
        <div onClick={()=> {
            if(window.confirm('Cet article sera définitivement supprimé! Voulez-vous continuer ?')){
                deleteOnePost();
            }
        }}>
            <img src='./img/icons/trash.svg' alt="trash" />
        </div>
    );
};

export default DeleteCard;