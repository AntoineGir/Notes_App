import React from "react";
import { TouchableOpacity, Text } from "react-native";

const ButtonValid = ({
    title, 
    onPress = () =>{},
}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={{
            height:55,
            width:'95%',
            backgroundColor:"blue",
            marginVertical: 20,
            justifyContent: 'center',
            alignItems:'center',
            borderRadius:10,
        }}>
            <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonValid;