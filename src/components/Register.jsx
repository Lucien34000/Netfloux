import React, {useState} from 'react';
import Input from './TextInput';
import Button from '../shared/Button';
import Modal from '../shared/Modal';

const Register = () => {

    const [user, setUser] = useState({
        gender: '',
        name: '',
        firstName : '',
        city : '',
        cp : ''
    });

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='form' style={{ maxWidth: '300px', padding: '20px 40px'}}>
            { 
            showModal ?
                <Modal 
                    data={user}
                    closeModal={() => setShowModal()} 
                />
            :
                <div>
                    <p><strong>Choose a gender :</strong></p>
                    <div style={{marginBottom: '40px', display: 'flex'}}>
                        <div style={{display: 'flex', minWidth: '50%'}}>
                            <Input type="radio" name="gender" value="Man" action={(e) => setUser({...user, gender: e.target.value})}  />
                            <label>Men</label>
                            </div>
                    
                            <div style={{display: 'flex', minWidth: '50%'}}>
                            <Input type="radio" name="gender" value="Women" action={(e) => setUser({...user, gender: e.target.value})}  />
                            <label>Women</label>
                        </div> 
                    </div>

                    <Input 
                        label='Name :'
                        value={user.name}
                        action={(e) => setUser({...user, name: e.target.value})}
                        name='name'
                        type='text'
                    />
                    <Input 
                        label='First Name :'
                        value={user.firstName}
                        action={(e) => setUser({...user, firstName: e.target.value})}
                        name='firstName'
                        type='text'
                    />
                    <Input 
                        label='City :'
                        value={user.city}
                        action={(e) => setUser({...user, city: e.target.value})}
                        name='city'
                        type='text'
                    />
                    <Input 
                        label='CP :'
                        value={user.CP}
                        action={(e) => setUser({...user, cp: e.target.value})}
                        name='CP'
                        type='text'
                    />

                    <Button 
                        click={() => setShowModal(true)}
                        type="submit"
                        method="submit"
                        label="Submit"
                    />

                </div>
            }
        </div>
    )

}

export default Register;