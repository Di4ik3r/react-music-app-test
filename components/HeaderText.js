import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashedView = () => <View style={styles.dash} />;
const HeaderText = ({ text }) => (
  <View>
    <Text style={styles.textHeader}> {text} </Text>
    <DashedView />
  </View>
);

const styles = StyleSheet.create({
  textHeader: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  dash: {
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: 10,
  },
});

export default HeaderText;
