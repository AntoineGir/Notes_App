import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";

export default function Home({navigation}){
    const Navigation = useNavigation();

    const Login = async() => {
        Navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={{backgroundColor : "#6DC700", flex: 1}}>
            {/* <View style={{alignItems:"center",paddingTop:50}}>
                <Image style={{}} source={require('../image/215055.png')}/>
            </View> */}
            <View style={{flex:1,marginTop:120, backgroundColor: 'white', borderTopLeftRadius:45,borderTopRightRadius:45, paddingTop:40}}>
                <Text style={{textAlign:"center", fontSize:35, fontWeight:"bold"}}> Notes app</Text>
                
                <View style={{paddingTop:90, alignItems:"center"}}>
                    {/* <ButtonValid 
                        title='Sign Up'
                        //onPress={Login}
                    /> */}
                    <TouchableOpacity>
                        <Text style={{paddingTop:10}} onPress={() => navigation.navigate('Login')}>
                            Already have an account? Log In
                        </Text> 
                    </TouchableOpacity>     
                </View>
            </View>
        </SafeAreaView>
    )
}
