import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Error handling</Text>
      <Button title="Click me" onPress={handlePress} />
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