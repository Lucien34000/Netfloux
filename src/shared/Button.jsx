import React from 'react';

const Button = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '30px 0'}} >
            <button
                onClick={props.click}
                className='btn'
            >
                {props.label}
            </button>
        </div>
        
    )
}

export default Button;