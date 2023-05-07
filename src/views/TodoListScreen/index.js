/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { Text, View, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TodoListScreen = () => {

    const [todoList, setTodoList] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleChangeText = (text) => {
        setInputText(text);
    };

    const handleAddTodo = () => {
        if (inputText !== '') {
            if (inputText.trim().length > 0) {
                setTodoList((value) => value.concat({ text: inputText, completed: false }));
                // setTodoList([...todoList, inputText]);
                setInputText('');
            }
        }
    };

    const toggleTodo = (index) => {
        const newTodoList = [...todoList];
        newTodoList[index].completed = !newTodoList[index].completed;
        setTodoList(newTodoList);
    };

    const handleRenderListItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => toggleTodo(index)} style={styles.TouchableOpacity} >
                <View style={styles.todo}>
                    <Text style={item.completed ? styles.completedTodo : styles.fontTask}>{index + 1}. </Text>
                    <Text style={item.completed ? styles.completedTodo : styles.fontTask}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tareas</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe una tarea"
                    value={inputText}
                    onChangeText={handleChangeText}
                />
                <Button title="Agregar" onPress={handleAddTodo} />
            </View>
            <View>
                <FlatList
                    data={todoList}
                    renderItem={handleRenderListItem}
                    keyExtractor={(item) => item.text}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
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
        width: '100%',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    todoText: {
        flex: 1,
    },
    fontTask: {
        fontSize: 23,
        color: 'white',
    },
    completedTodo: {
        fontSize: 23,
        textDecorationLine: 'line-through',
        color: 'red',
    },
    TouchableOpacity: {
        width: '100%',
    },
});

export default TodoListScreen;

