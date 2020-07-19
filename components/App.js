/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  NativeRouter,
  Route,
  Link,
  Redirect,
  useHistory,
} from 'react-router-native';

import t from 'tcomb-form-native';
import { match } from 'tcomb-form-native/lib';

import Home from './Home';
import Login from './Login';
import Add from './Add';
import TabBar from './TabBar';
import LoginCustom from './LoginCustom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../redux/reducer';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.body}>
          {/* <Route exact path="/" component={Index} /> */}
          <Route exact path="/" component={LoginCustom} />
          <Route path="/app" component={AppIndex} />
        </View>
      </NativeRouter>
    </Provider>
  );
};

const AppIndex = () => {
  return (
    <View>
      <Route path="/app/home" component={Home} />
      <Route path="/app/add" component={Add} />
      <TabBar />
    </View>
  );
};

const Index = () => {
  return (
    <>
      <Login />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d1d1d1',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    margin: 5,
    marginBottom: 15,
    padding: 0,
  },
  button: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
    height: '100%',
  },
  appChild: {
    height: '90%',
  },
});

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}

export { styles, randomInteger };
export default App;
