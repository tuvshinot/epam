import React, { PureComponent } from 'react';
import TodoListView from './components/TodoListView/TodoListView';

export default class TodoList extends PureComponent {

    state = {
        Listing: [],
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

    addInputToList = (e) => {
        const listing = this.state.Listing;
        let newValue = this.state.inputValue;
        listing.push({ isDone: false, value: newValue });
        this.setState({ Listing: listing, inputValue: '' })
    }

    removeListHandler = (e, idx) => {
        e.stopPropagation()
        let listing = this.state.Listing.slice();
        listing.splice(idx, 1);
        this.setState({ Listing: listing })
    }

    isDoneToggleHandler = (idx) => {
        let listing = this.state.Listing.slice();
        listing[idx].isDone = !listing[idx].isDone;
        this.setState({ Listing: listing })
    }

    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.addInputToList(e)
        }
    }

    addHandler = (e) => {
        this.addInputToList(e);
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
            <TodoListView inputHandler={this.inputHandler}
                inputValue={this.state.inputValue}
                addHandler={this.addHandler}
                keyPressHandler={this.keyPress}
                isValid={this.state.isValid} 
                listings={this.state.Listing}
                isDoneHandler={this.isDoneToggleHandler}
                removeListHandler={this.removeListHandler}/>
        )
    }
}
