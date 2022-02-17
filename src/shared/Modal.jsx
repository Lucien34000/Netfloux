import React from 'react';
import Button from './Button';

const Modal = (props) => {
    return (
        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
            <h3 >Gender : {props.data.gender}</h3>
            <h3 >Name : {props.data.name}</h3>
            <h3 >First Name : {props.data.firstName}</h3>
            <h3 >City : {props.data.city}</h3>
            <h3 >CP : {props.data.cp}</h3>
            <Button 
                label={'Close modal'}
                click={props.closeModal}
            />
        </div>
    )
}

export default Modal;