import { useEffect } from 'react';
import { UserIdContext } from './Context/AppContext';
import Router from './components/Routes';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from './feature/userIdSlices';

const App = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userId.userId);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}jwtid`, {
                withCredentials: true,
            })
            .then((res) => dispatch(getUserId(res.data)))
            .catch((error) => console.log('No token found : ' + error));
    }, [dispatch]);

    return (
        <UserIdContext.Provider value={userId}>
            <Router />
        </UserIdContext.Provider>
    );
};

export default App;
