import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/postsSlices';
import Card from './Post/Card';

const Thread = () => {
    const [loadPosts, setLoadPosts] = useState(true);
    const [countPosts, setCountPosts] = useState(5);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);

    const loadMorePosts = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight){
            setLoadPosts(true)
        }
    }


    useEffect(() => {
        if (loadPosts) {
            axios
                .get(`${process.env.REACT_APP_API_URL}api/post/`)
                .then((res) => dispatch(getPosts({data: res.data, countPosts})))
                .catch((error) => console.log(error));
            setLoadPosts(false);
            setCountPosts( countPosts + 5 )
        }

        window.addEventListener('scroll', loadMorePosts)
        return () => window.removeEventListener('scroll', loadMorePosts)
    }, [loadPosts, dispatch, countPosts]);

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
