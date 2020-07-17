import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useHistory } from 'react-router-native';
import t from 'tcomb-form-native';

import { connect } from 'react-redux';

import { styles as appStyles } from './App';
import { login, loginSetInput } from '../redux/actions';

const UserTemplate = t.struct({
  login: t.String,
  password: t.String,
});
const options = {
  fields: {
    login: {},
    password: {
      password: true,
      secureTextEntry: true,
    },
  },
};

const Form = t.form.Form;

const users = [
  {
    login: 'user1',
    password: 'pass1',
  },
  {
    login: 'u1',
    password: 'p1',
  },
  {
    login: 'u',
    password: 'p',
  },
];

const Login = ({ account, loginInput, login, loginSetInput }) => {
  const history = useHistory();
  let _form = null;

  const handleSubmit = () => {
    const input = _form.getValue();
    if (!input) {
      loginSetInput({});
      return;
    }
    const filter = users.filter((item) => {
      return item.login === input.login && item.password === input.password;
    });
    if (filter.length < 1) {
      loginSetInput({});
      return;
    }

    login({
      login: input.login,
      password: input.password,
    });
    if (account) {
      history.push('/app/home');
    }
  };

  return (
    <View style={styles.loginWrapper}>
      <View style={styles.loginPanel}>
        <Form
          value={loginInput}
          type={UserTemplate}
          options={options}
          ref={(c) => {
            _form = c;
          }}
        />
        <View style={appStyles.button}>
          <Button
            title="login"
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  loginPanel: {
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 25,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const mapStateToProps = (state) => ({
  account: state.account,
  loginInput: state.loginInput,
});

const mapDispatchToProps = {
  login,
  loginSetInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
