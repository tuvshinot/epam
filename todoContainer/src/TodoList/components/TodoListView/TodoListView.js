import React from 'react';
import './TodoListView.css';
import Input from '../Input/Input';
import Listing from '../Listing/Listing';


const todoListView = props => (
    <div className="TodoList">
        <Input inputHandler={props.inputHandler}
            inputValue={props.inputValue}
            addHandler={props.addHandler}
            keyPressHandler={props.keyPressHandler}
            isValid={props.isValid} />
        <Listing listings={props.listings}
            isDoneHandler={props.isDoneHandler}
            removeListHandler={props.removeListHandler} />
    </div>                                  
)

export default todoListView;





