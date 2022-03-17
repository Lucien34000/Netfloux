import { Link } from "react-router-dom";
import * as React from 'react';
import axios from 'axios';
import { token } from '../Profile/Profile';
import { GlobalContext, IContext } from '../Context/Context';
import Button from '../shared/Button';
import { IUser } from '../interface/IUser';


const Navbar= () => {

    const {store, setStore} = React.useContext(GlobalContext) as IContext;

    const [user, setUser] = React.useState<IUser | null>(null);

    const config = {
        headers: { 
            Authorization: `Bearer ${token}` 
        }
    };

    const getMyProfile = () => {
        axios
        .get('https://api-ri7.herokuapp.com/api/users/profile', config)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    };

    React.useEffect(() => {
        console.log('useEffect Profile')
        getMyProfile();
    }, []);

    return (
  
        <div className="App">
          <header className="App-header">
            <h1> Netflouz </h1>
            <nav style={{display: 'flex', alignItems: 'center'}}>
                <Link className="navLink" to="/">Home</Link> |{" "}
                <Link className="navLink" to="movies">Movies</Link> |{" "}
                <Link className="navLink" to="profil">Profil</Link>
                <p>Theme actuel : {store.theme}</p>
                <Button 
                    label='Change Theme'
                    click={() => setStore({...store, theme: 'dark'})}
                />
            </nav>
          </header>
        </div>
  
    );
      
      
  }

  export default Navbar;