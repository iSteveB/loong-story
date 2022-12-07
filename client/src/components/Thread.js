import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/postsSlices';
import Card from './Post/Card';

const Thread = () => {
    const [loadPosts, setLoadPosts] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);

    useEffect(() => {
        if (loadPosts) {
            axios
                .get(`${process.env.REACT_APP_API_URL}api/post/`)
                .then((res) => dispatch(getPosts(res.data)))
                .catch((error) => console.log(error));
            setLoadPosts(false);
        }
    }, [loadPosts, dispatch]);

    return (
        <div className='thread-container'>
            <ul>
                {posts?.map((post) => {
                    return <Card post={post} key={post._id} />;
                })}
            </ul>
        </div>
    );
};

export default Thread;
