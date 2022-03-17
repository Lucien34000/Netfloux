import * as React from 'react';
import axios from 'axios';
import Button from '../shared/Button';
import { Rings } from  'react-loader-spinner'
import Input from '../components/TextInput';


interface IUser {
    avatar: string | null;
    biography: string | null;
    // birthdate: Date | null;
    city: string;
    email: string;
    firstname: string;
    id: number;
    lastname: string;
    postalCode: string;
}

export const token = sessionStorage.getItem('token');

const Profile = () => {

    const [user, setUser] = React.useState<IUser | null>(null);
    const [isUpdating, setIsUpdating] = React.useState<boolean>(false);

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

    const updateProfile = () => {
        if (isUpdating)
        {
            console.log('je veux enregistrer les modifications mon profil');
            axios
            .put('https://api-ri7.herokuapp.com/api/users/profile', user, config)
            .then(res => console.log("UPDATE RESPONSE = ", res))
            .catch(err => console.log('error => ', err))
        }
        setIsUpdating(!isUpdating);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (user != null)
        {
            const key = event.target.name;
            const value = event.target.value;
            setUser({...user, [key] : value});
        };
    };

    React.useEffect(() => {
        getMyProfile();
    }, []);

    return (
        <div className="App">
            <div className="content">
                <div className='form' style={{ maxWidth: '500px', padding: '20px 40px'}}>
                    { user != null ?
                        <>
                            { isUpdating ? 
                                <>
                                    <Input  
                                        label='Nom : '  
                                        value={user.lastname}  
                                        action={handleChange} 
                                        name='lastname'
                                        type='text'
                                    />
                                    <Input 
                                        label='Prénom : ' 
                                        value={user.firstname}
                                        action={handleChange} 
                                        name='firstname'
                                        type='text'
                                    />
                                    <Input 
                                        label='Email : ' 
                                        value={user.email}
                                        action={handleChange} 
                                        name='email'
                                        type='email'
                                    />
                                    <Input 
                                        label='CP : ' 
                                        value={user.postalCode}
                                        action={handleChange} 
                                        name='postalCode'
                                        type='text'
                                    />
                                    <Input 
                                        label='City : ' 
                                        value={user.firstname}
                                        action={handleChange} 
                                        name='firstname'
                                        type='text'
                                    />
                                    <div style={{display: 'flex'}}>
                                        <label style={{marginRight: '20px'}}>Biography : </label>
                                        <textarea
                                            name='biography' 
                                            rows={5}
                                            cols={20}
                                        >
                                            {user.biography}
                                        </textarea>
                                    </div>
                                    
                                </>
                            :
                                <>
                                    <img 
                                        src={user.avatar != null ? user.avatar : ''} 
                                        alt='avatar' 
                                    />ù
                                    <p>Lastname : {user.lastname}</p>
                                    <p>Firstname : {user.firstname}</p>
                                    <p>Email : {user.email}</p>
                                    <p>CP : {user.postalCode}</p>
                                    <p>City : {user.city}</p>
                                    <p>Biography : {user.biography}</p>
                                </>
                            }
                            <Button 
                                label={isUpdating ? 'Enregistrer' : 'Modifier'}
                                click={updateProfile}
                            />
                        </>
                    : 
                            // <p>Chargement ...</p>
                        <Rings
                            height="100"
                            width="100"
                            color='grey'
                            ariaLabel='loading'
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;