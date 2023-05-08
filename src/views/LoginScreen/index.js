/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, TextInput, Button, View, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUserTextChange = (text) => {
        setUser(text);
    };

    const handlePasswordTextChange = (text) => {
        setPassword(text);
    };

    const handleLoginPress = () => {
        if (user.trim().length > 0 && password.trim().length > 0) {
            if (user === 'admin' && password === 'admin') {
                navigation.navigate('TodoList');
            } else {
                Alert.alert('Error', 'Username or password is incorrect', [{ text: 'OK' }]);
                setUser('');
                setPassword('');
            }
        }
    };

    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={style.Image} />
            </View>
            <View style={style.inputContainer}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="#777"
                    style={style.textInput}
                    onChangeText={handleUserTextChange}
                    value={user}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#777"
                    style={style.textInput}
                    secureTextEntry
                    onChangeText={handlePasswordTextChange}
                    value={password}
                />
            </View>
            <Button
                title="Login"
                style={style.button}
                onPress={handleLoginPress}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 12,
        marginRight: 12,
    },
    Image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    imageContainer: {
        marginTop: 50,
        marginBottom: 50,
    },
    inputContainer: {
        margin: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        marginBottom: 10,
        fontSize: 20,
        color: 'black',
    },
    button: {
        margin: 10,
    },
});

export default LoginScreen;
