import React from 'react';
import './Input.css';
import Title from '../Title/Title';

export default function Input(props) {
    const { isValid  } = props;

    return (
        <div className="Input">
            <Title  text="TodoList" />
            <input type="text" 
                   className="Input__value" 
                   value={props.inputValue}
                   onKeyDown={props.keyPressHandler} 
                   onChange={props.InputHandler} />
            <button className="Input__btn" 
                    disabled={!isValid}
                    onClick={props.addHandler}>Add
            </button>
        </div>
    )
}
