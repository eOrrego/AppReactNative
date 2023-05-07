/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { ScrollView, Text, View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {

  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText !== '') {
      setTodoList([...todoList, inputText]);
      setInputText('');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Tareas</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe una tarea"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <Button title="Agregar" onPress={addTodo} />
        </View>
        {todoList.map((todo, index) => (
          <View key={index} style={styles.todo}>
            <Text>{index + 1}. </Text>
            <Text>{todo}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    marginRight: 10,
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default App;
