import React, { useState, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import PasswordInputText from 'react-native-hide-show-password-input';
import LinearGradient from 'react-native-linear-gradient';

const LoginCustom = () => {
  return (
    <ScrollView style={styles.loginCustomContainer}>
      <View style={styles.imageHolder}>
        <Image
          source={require('../public/img/logo.png')}
          style={styles.imageLogo}
        />
        <Image
          source={require('../public/img/top-right-corner.png')}
          style={styles.imageTopRightCorner}
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.textInheritence, styles.textHeader]}>Hello!</Text>
        <Text style={[styles.textInheritence, styles.textHint]}>
          please enter your details to sign in
        </Text>
        <InputCustom title="Phone Number" />
        {/* <InputCustom title="Pin" /> */}
        <PinInputCustom title="Pin" />

        {/* <Text>kek</Text> */}
        {/* <PasswordInput /> */}
        {/* <Text>kek</Text> */}
        <Text style={styles.textForgot}>forgot your pin?</Text>
        <GradientButton title="Sign in" />

        <Text style={styles.confirmTip}>
          <Text>Don't have an account?</Text>{' '}
          <Text style={styles.confirmTipLink}>Sign up</Text>
        </Text>

        <Text style={styles.footer}>copyright © meetup.</Text>
      </View>
    </ScrollView>
  );
};

const InputCustom = ({ title }) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.inputCustom}>
      <Text style={[styles.textInheritence, styles.inputCustomText]}>
        {title}
      </Text>
      <TextInput
        style={styles.inputCustomField}
        onChange={(text) => {
          setValue(text);
        }}
        value={value}
      />
    </View>
  );
};

const PinInputCustom = ({ title }) => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(true);

  return (
    <View style={styles.inputCustom}>
      <Text style={[styles.textInheritence, styles.inputCustomText]}>
        {title}
      </Text>
      <TextInput
        secureTextEntry={!show}
        style={styles.inputCustomField}
        onChange={(text) => {
          setValue(text);
        }}
        value={value}
      />
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
        }}
        style={styles.passToggle}
      >
        <Image
          style={styles.passLock}
          source={require('../public/img/pass-lock.png')}
        />
      </TouchableOpacity>
      {/* <Text>{show.toString()}</Text> */}
    </View>
  );
};

const GradientButton = ({ title }) => {
  return (
    <LinearGradient
      style={styles.gradientButton}
      start={{ x: 0, y: 0 }}
      colors={['#E73361', '#9A1675']}
    >
      <Text style={styles.gradientButtonText}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginCustomContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageTopRightCorner: {},
  imageLogo: {
    marginTop: '20%',
    marginLeft: '15%',
  },
  content: {
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  textInheritence: {
    color: '#380628',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: '10%',
  },
  textHint: {
    marginLeft: '2%',
    width: '40%',
    lineHeight: 25,
    marginBottom: '5%',
  },
  inputCustom: {
    marginTop: 10,
  },
  inputCustomField: {
    borderWidth: 1,
    borderColor: '#9F8A99',
    borderRadius: 3,
    height: 36,
    marginTop: 5,
    marginBottom: 5,
  },
  textForgot: {
    color: '#D02764',
    textAlign: 'right',
  },
  gradientButton: {
    marginTop: '9%',
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientButtonText: {
    color: 'white',
    fontSize: 18,
  },
  confirmTip: {
    width: '100%',
    marginTop: 10,
    textAlign: 'center',
  },
  confirmTipLink: {
    color: '#D02764',
  },
  footer: {
    textAlign: 'center',
    marginTop: '16%',
  },
  passLock: {},
  passToggle: {
    position: 'absolute',
    top: '39%',
    right: 1,
    width: 45,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginCustom;
