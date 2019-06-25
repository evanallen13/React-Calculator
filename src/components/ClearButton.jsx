import React from 'react';
import './Button.css'

export const ClearButton = (props) => (
    <div className='button functionalOperator' onClick={props.handleClear}>
        {props.children}
    </div>
)