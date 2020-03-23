import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./Home";
import Car from "./Car";
import Brand from "./Brand";

const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator initialRouteName="Search" headerMode="none">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Car" component={Car}/>
            <Stack.Screen name="Brand" component={Brand}/>
        </Stack.Navigator>
    );
}

export default HomeNavigator;