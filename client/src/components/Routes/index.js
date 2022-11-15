import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import Navbar from '../Navigation/Navbar';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/home' exact element={<Home />} />
                <Route path='/profil' exact element={<Profil />} />
                <Route path='/trending' exact element={<Trending />} />
                <Route path='*' element={<Navigate to='/home' replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
