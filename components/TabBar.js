import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';

import { styles as appStyles } from './App';
import { logout } from '../redux/actions';

const TabBar = ({ logout }) => {
  return (
    <View className="tab-bar" style={styles.tabBar}>
      <TabBarItem position="left" text="home" linkTo="/app/home" />
      <TabBarItem position="center" text="add" linkTo="/app/add" />
      <TabBarItemLogout logout={logout} text={'Logout'} />
    </View>
  );
};

const TabBarItem = ({ text, linkTo, position }) => {
  let style = styles.tabBarItem;
  switch (position) {
    case 'left': {
      style = {
        ...style,
        ...styles.tabBarLeftItem,
      };
      break;
    }
    case 'center': {
      style = {
        ...style,
        ...styles.tabBarCenterItem,
      };
      break;
    }
  }

  return (
    <Link to={linkTo} className="tab-bar-item" style={style}>
      <Text style={appStyles.text}> {text} </Text>
    </Link>
  );
};

const TabBarItemLogout = ({ text, logout }) => {
  return (
    <Link
      to="/"
      className="tab-bar-item"
      style={{
        ...styles.tabBarItem,
        ...styles.tabBarRightItem,
      }}
      onPress={() => {
        logout();
      }}
    >
      <Text style={appStyles.text}> {text} </Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '10%',
    backgroundColor: 'transparent',
  },
  tabBarItem: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#3a3a3a',
    backgroundColor: '#a3a3a3',
  },
  tabBarLeftItem: {
    borderTopLeftRadius: 25,
    borderLeftWidth: 2,
  },
  tabBarCenterItem: {},
  tabBarRightItem: {
    borderTopRightRadius: 25,
    borderRightWidth: 2,
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
