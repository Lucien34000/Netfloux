import * as React from 'react';

interface InputProps {
    label : string;
    type: string;
    value: string;
    name?: string;
    action: React.ChangeEventHandler;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
    return (
        <div  style={{marginBottom: '20px', display: 'flex', justifyContent:'space-between'}}        >
            <label htmlFor={props.label} style={{marginRight: '20px'}}>
                {props.label}
            </label>
            <input 
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={e => props.action(e)}
                
            />
        </div>
    );
}

export default Input;