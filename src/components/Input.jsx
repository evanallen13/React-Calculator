import React from 'react';
import './Input.css'
import { tsPropertySignature } from '@babel/types';

export const Input = (props) => (
    <div className='input'>
        {props.input}
    </div>
);