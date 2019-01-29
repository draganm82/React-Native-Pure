import React, { Component } from 'react';
import { Viev, Text } from 'react-native';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import firbase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
     const config = {
      apiKey: 'AIzaSyAVtr9BYBEI2ADWSExnZx-4kutyXRHInsU',
      authDomain: 'manager-72cb2.firebaseapp.com',
      databaseURL: 'https://manager-72cb2.firebaseio.com',
      projectId: 'manager-72cb2',
      storageBucket: 'manager-72cb2.appspot.com',
      messagingSenderId: '588165829873'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store= createStore(reducers, {}, applyMidleware(ReduxThunk));
    return (
      <Provider store = {store  }>

        <Router />
      </Provider>
    );
  }
}

export default App;
