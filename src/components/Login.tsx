import * as React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Input from './TextInput';
import Button from '../shared/Button';
import { useNavigate } from 'react-router';

interface LoginProps {
    isAuth: boolean;
    setIsAuth: (state : boolean) => void;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {

    let navigate = useNavigate();
    const [error, setError] = React.useState<string | null>(null);


    const [userLogged, setUserLogged] = React.useState({
        email: '',
        password: ''
    });

    const login = () => {
        console.log(userLogged);
        axios.post(`https://api-ri7.herokuapp.com/api/users/login`, userLogged)
        .then(res =>  {
            if (res.data.token != null) {
                const token = res.data.token;
                sessionStorage.setItem('token', token)
                props.setIsAuth(true);
            }
        })
        .catch(err => setError('Une erreur est survenue, veuillez essayer à nouveau.'))
    };

    React.useEffect(() => {
        if (props.isAuth)
        {
            navigate('/movies');
        };
    }, [props.isAuth])

    return (
        <div className="App">
            <div className="content">
                <div className='form' style={{ maxWidth: '500px', padding: '20px 40px'}}>
                    {error != null && <p>{error}</p>}
                    <div>
                        <Input 
                            name='email'
                            label='Email' 
                            value={userLogged.email}
                            action={(e : React.ChangeEvent<HTMLInputElement>) => setUserLogged({...userLogged, email : e.target.value})} 
                            type='text'
                        />
                        <Input
                            name = 'password'
                            label='Password' 
                            value={userLogged.password}
                            action={(e : React.ChangeEvent<HTMLInputElement>) => setUserLogged({...userLogged, password : e.target.value})} 
                            type='password'     
                        />
                        <Link className="link" to="register">Register</Link>
                        <Button 
                            click = {login}
                            label="Submit"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;