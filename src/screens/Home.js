import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";
import ButtonValid from "../components/ButtonValid";

export default function Home({navigation}){
    const Navigation = useNavigation();

    const Login = async() => {
        Navigation.navigate('Login')
    }

    const SignUp = async() => {
        navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={{backgroundColor : '#6DC700', flex: 1}}>
            <View style={{flex:1,marginTop:120, backgroundColor: 'white', borderTopLeftRadius:45,borderTopRightRadius:45, paddingTop:40}}>
                <Text style={{textAlign:'center', fontSize:35, fontWeight:'bold'}}> Notes app</Text>
                
                <View style={{alignItems:'center', width:'100%', position:'absolute', bottom:0, paddingBottom:'10%'}}>
                    <ButtonValid title='Sign Up' onPress={SignUp}/>
                        <Text onPress={() => navigation.navigate('Login')}>
                            Already have an account? Log In
                        </Text>     
                </View>
            </View>
        </SafeAreaView>
    )
}
