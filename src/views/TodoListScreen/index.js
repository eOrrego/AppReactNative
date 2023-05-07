/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { Text, View, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const TodoListScreen = () => {

    const [todoList, setTodoList] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleChangeText = (text) => {
        setInputText(text);
    };

    const handleAddTodo = () => {
        if (inputText !== '') {
            if (inputText.trim().length > 0) {
                setTodoList((value) => value.concat({ text: inputText }));
                // setTodoList([...todoList, inputText]);
                setInputText('');
            }
        }
    };

    const handleRenderListItem = ({ item, index }) => {
        return (
            <View style={styles.todo}>
                <Text>{index + 1}. </Text>
                <Text>{item.text}</Text>
            </View>
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
        backgroundColor: '#000',
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
        marginHorizontal: 20,
        marginBottom: 10,
    },
});

export default TodoListScreen;

