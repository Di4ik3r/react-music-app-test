import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { styles as appStyles } from './App';
import HeaderText from './HeaderText';
import Track from './Track';

const Home = ({ account, tracks }) => {
  return (
    <View style={appStyles.appChild}>
      <HeaderText text={`home (${account.login})`} />
      <ScrollView style={styles.homeContainer}>
        {tracks.map((item) => (
          <Track key={item.id} track={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  account: state.account,
});

export default connect(mapStateToProps)(Home);
