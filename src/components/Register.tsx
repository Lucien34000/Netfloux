import * as React from 'react';
import { Link } from "react-router-dom";
import Input from './TextInput';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface IUser {
    firstname: string;
    lastname: string;
    password: string;
    city: string;
    postalCode: string;
    // birthdate: Date | null ;
    email: string;
    biography: string;
    avatar: string;
}

const Register: React.FC = () => {

    let navigate = useNavigate();

    const [user, setUser] = React.useState<IUser>({
        firstname: '',
        lastname: '',
        password: "",
        city: '',
        postalCode: '',
        // birthdate: '',
        email: '',
        biography: "",
        avatar: ""
    });

    const [error, setError] = React.useState<string | null>(null);
    const [showModal, setShowModal] = React.useState(false);
    const closeTheModal = () => setShowModal(false);
    const navigateToMovies = () => navigate('/movies');

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name;
        const value = e.target.value;
        setUser({...user, [key] : value})
    }

    const register = () => {
        axios.post(`https://api-ri7.herokuapp.com/api/users/register`, user)
        .then(res => {
            if (res.status === 200) {
                navigate('/');
            }})
        .catch(err => setError('Une erreur est survenue, veuillez essayer à nouveau.'))
    }

    return (
        <div className="App">
            <div className="content">
                <div className='form' style={{ maxWidth: '500px', padding: '20px 40px'}}>
                    { showModal ?
                        <Modal 
                            data={user}
                            closeModal={closeTheModal}
                            validateModal={navigateToMovies}
                        />
                    :
                    <div>
                            <Input  
                            label='Nom*'  
                            value={user.lastname}  
                            action={handleChange} 
                            name='lastname'
                            type='text'
                        />
                        <Input 
                            label='Prénom*' 
                            value={user.firstname}
                            action={handleChange} 
                            name='firstname'
                            type='text'
                        />
                        <Input 
                            label='Email*' 
                            value={user.email}
                            action={handleChange} 
                            name='email'
                            type='email'
                        />
                        <Input 
                            label='Password*' 
                            value={user.password}
                            action={handleChange} 
                            name='password'
                            type='password'
                        />
                        <Input 
                            label='Ville*' 
                            value={user.city}
                            action={handleChange} 
                            name='city'
                            type='text'
                        />
                        <Input 
                            label='Code postal*' 
                            value={user.postalCode}
                            action={handleChange} 
                            name='postalCode'
                            type='text'
                        />
                        <Input 
                            label='Biographie' 
                            value={user.biography}
                            action={handleChange} 
                            name='biography'
                            type='text-area'
                        />
                        <Link className="link" to="/">Login</Link>
                        <Button 
                            label={'Submit'} 
                            click={register}
                        />
                        </div>
                    }
            </div>
        </div>
    </div>
        
    )

}

export default Register;