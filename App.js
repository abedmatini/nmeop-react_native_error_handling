import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    try {
        setGreeting(`Hello, ${user.name}!`);
    } catch {
        setGreeting(`Hello!`);
        console.log('Username not set')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Name:</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={text => setUser({name:text})}
      />

      <Pressable style={styles.pressable} onPress={handleGreet}>
        <Text style={styles.pressableText}>Greet Me</Text>
      </Pressable>

      {greeting !== '' && <Text style={styles.greeting}>{greeting}</Text>}
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
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
  pressable: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  pressableText: {
    color: 'white',
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

export default App;