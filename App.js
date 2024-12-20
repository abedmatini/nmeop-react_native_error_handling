import React, { useState } from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  const clickFirstBtn = () => {
      throw new Error('This is a generic error');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Error Example</Text>

      <Pressable style={styles.pressable} onPress={clickFirstBtn} >
        <Text style={styles.pressText}>Button 1</Text>
      </Pressable>

      {data && <Text>{data.name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pressable: {
    marginVertical: 10,
    backgroundColor: 'blue',
    padding: '4pt'
  },
  pressText: {
    color: 'white'
  }
});

export default App;