import React from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import store from './store';

import { Provider } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello</h1>
          <AppNavBar />
          <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
