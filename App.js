import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Error handling</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingBottom: 30
  },
});

export default App;