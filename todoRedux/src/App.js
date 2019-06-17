import React, { Component } from 'react';
import {Provider} from 'react-redux';

import TodoList from './containers/TodoList/TodoList';
import {configureStore} from './store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}

export default App;
