import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";

//add screan
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Notes from "../screens/Notes";

const Stack = createStackNavigator();


export const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Notes">
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen options={{headershown: false}} name="Notes" component={Notes}/>
        </Stack.Navigator>
    )
}


