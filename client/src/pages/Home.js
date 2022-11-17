import LeftNav from '../components/Navigation/LeftNav';
import Thread from '../components/Thread';
const Home = () => {
    return (
        <div className='home'>
            <LeftNav />
            <div className="main">
                <Thread />
            </div>
        </div>
    );
};

export default Home;
