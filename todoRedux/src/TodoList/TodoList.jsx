import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import { addTodo, removeTodo, isDoneToggle } from '../store/actions/todo';
import './TodoList.css';
import Input from './components/Input/Input';
import Listing from './components/Listing/Listing';

class TodoList extends PureComponent {

    state = {
        inputValue: '',
        isValid: false
    }

    componentDidUpdate() {
        this.inputValidator(this.state.inputValue)
    }

    inputHandler = (e) => {
        this.inputValidator(e.target.value)
        this.setState({ inputValue: e.target.value })
    }

    clearInputValue = (e) => {
        this.setState({ inputValue: '' })
    }

    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.props.addTodo(this.state.inputValue)
            this.clearInputValue()
        }
    }

    inputValidator = (inputValue) => {
        if (inputValue.length > 0) {
            this.setState({ isValid: true })
        } else {
            this.setState({ isValid: false })
        }
    }

    render() {
        return (
            <div className="TodoList">
                <Input InputHandler={this.inputHandler}
                    inputValue={this.state.inputValue}
                    addHandler={this.props.addTodo}
                    keyPressHandler={this.keyPress}
                    clearInputValue={this.clearInputValue}
                    isValid={this.state.isValid} />
                <Listing listings={this.props.Listing}
                    isDoneHandler={this.props.isDoneToggle}
                    removeListHandler={this.props.removeTodo} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Listing : state.todo.Listing
    };
};


export default connect(mapStateToProps, { addTodo, removeTodo, isDoneToggle })(TodoList);
