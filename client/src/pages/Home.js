import NewPostForm from '../components/Post/NewPostForm';
import Log from '../components/Log'
import LeftNav from '../components/Navigation/LeftNav';
import Thread from '../components/Thread';
import { useSelector } from 'react-redux';
const Home = () => {
    const userId = useSelector((state) => state.userId.userId);

    return (
        <div className='home'>
            <LeftNav />
            <div className="main">
                <div className="home-header">
                    {userId ? <NewPostForm /> : <Log logIn={true} signUp={false}/>}
                </div>
                <Thread />
            </div>
        </div>
    );
};

export default Home;
