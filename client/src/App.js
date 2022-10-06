import { useEffect, useState } from 'react';
import Router from './components/Routes';
import { UserIdContext } from './Context/AppContext';
import axios from 'axios';

const App = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}jwtid`, {
                withCredentials: true,
            })
            .then(res =>setUserId(res.data))
            .catch(err => console.log('No token found : ' + err))
        };
        fetchToken();
    }, [userId]);

    return (
        <UserIdContext.Provider value={userId}>
            <Router />
        </UserIdContext.Provider>
    );
};

export default App;
