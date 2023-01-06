import NewPostForm from '../components/Post/NewPostForm';
import Log from '../components/Log'
import LeftNav from '../components/Navigation/LeftNav';
import Thread from '../components/Thread';
import { useSelector } from 'react-redux';
import Trends from '../components/Trends';
import FriendsHint from '../components/Profil/FriendsHint';
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
            <div className="right-side">
                <div className="right-side-container">
                    <div className="wrapper">
                        <Trends />
                        {userId && <FriendsHint />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
