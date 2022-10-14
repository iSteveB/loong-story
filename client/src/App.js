import { useEffect } from 'react';
import Router from './components/Routes';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserId } from './feature/userIdSlices';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}jwtid`, {
                withCredentials: true,
            })
            .then((res) => dispatch(getUserId(res.data)))
            .catch((error) => console.log('No token found : ' + error));
    }, [dispatch]);

    return <Router />;
};

export default App;
