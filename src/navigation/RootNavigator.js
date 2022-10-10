import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { StackActions } from "@react-navigation/native";

//add screan
import Home from "../screens/Home";

const Stack = createStackNavigator();


export const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
        </Stack.Navigator>
    )
}


