/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoListScreen from '../views/TodoListScreen';
import HomeScreen from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen';

const Routes = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TodoList" component={TodoListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
