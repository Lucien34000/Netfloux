import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './shared/Navbar';
import ListMovies from './components/ListMovies';
import MovieDetails from './components/MovieDetails';
import Profile from './Profile/Profile';
import ContextProvider from './Context/Context';
// import { IUser } from './interface/IUser';


const Router = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    
    return (
        <BrowserRouter>
            <ContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/movies' element={ <ListMovies isAuth={isAuth}  /> } />
                    <Route path='/movieDetail' element={<MovieDetails />} />
                    <Route path='/profil' element={<Profile />} />
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    )
}


export default Router;