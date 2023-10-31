import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GamesPlayedListView = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>No data found </Text>
    </View>
  );
};

export default GamesPlayedListView;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
