import * as React from 'react';
import Button from './Button';

interface ModalProps {
    data : {
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
    closeModal: () => void;
    validateModal: () => void;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    return (
        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
            <h3 >Name : {props.data.lastname}</h3>
            <h3 >First Name : {props.data.firstname}</h3>
            <h3 >City : {props.data.city}</h3>
            <h3 >CP : {props.data.postalCode}</h3>
            <div style={{display: 'flex'}}>
                <Button 
                    label={'Close modal'}
                    click={props.closeModal}
                    // style={{backgroudColor: 'transparent'}}
                />
                <Button 
                    label={'Validate modal'}
                    click={props.validateModal}
                />
            </div>
            
        </div>
    )
}

export default Modal;