import * as React from 'react';

interface ButtonProps {
    label : string;
    click: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
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