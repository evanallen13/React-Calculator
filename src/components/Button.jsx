import React from 'react';
import './Button.css';

const isOp = val => {
    if(val === '÷'||val === '+'||val === '-'||val === 'x'||val === '='){
        return 'operator button'
    }else if(val === 'AC'||val === '+/-'||val === '%'){
        return 'functionalOperator button'
    }else{
        return 'button'
    }
}

export const Button = props => (
    <div 
        className={`button-wrapper ${isOp(props.children)}`}
        onClick={()=> props.handleClick(props.children)}
        >
        {props.children}
    </div>
)

export default Button;
