import { useEffect } from 'react';
import Router from './components/Routes';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from './feature/userIdSlices';
import { getUser } from './feature/userSlices';

const App = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId.userId)
    
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}jwtid`, {
                withCredentials: true,
            })
            .then((res) => dispatch(getUserId(res.data)))
            .catch((error) => console.log('No token found : ' + error));

            if(userId){
                axios.get(`${process.env.REACT_APP_API_URL}api/user/${userId}`)
                    .then(res => dispatch(getUser(res.data)))
            }
    }, [userId]);

    return <Router />;
};

export default App;
