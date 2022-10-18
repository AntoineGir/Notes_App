import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, View, StyleSheet, Keyboard, Alert } from 'react-native';
import Input from "../components/Input";
import ButtonValid from "../components/ButtonValid";
import { LoginIsVailable, CheckUser, CheckuserBeforeCreateAccount, CreateUser, AddUser} from "../database/request";

export default function Login({navigation}) {
  const navi = useNavigation();
  const [inputs, setInputs] = React.useState({email: '', password:''});
  const [errors, setErrors] = React.useState({});

  const CreateAcccount = async () => {
    const result = await LoginIsVailable(inputs.email);
    if(result === true){
      handleError('this username is already taken !', 'email');
     }
    else{
      const UserId = await AddUser(inputs.email, inputs.password);
      //Alert.alert(UserId)
    }
  }
  const validate = async ()=> {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input username', 'email');
      isValid = false;
    }
    if (!inputs.password){
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      CreateAcccount();
    }
  }
  
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  }

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  }
  return (
    <SafeAreaView style={{backgroundColor:"white", flex:1, flexdirection:"column", justifyContent:"space-between"}}>
      <View style={{paddingTop:45, paddingHorizontal:15}}>
        <Text style={{color:"black", fontSize:35, fontWeight:"bold"}}>Sign up</Text>
        <View style={{marginVertical: 20}}>
          <Input
          onChangeText={text => handleOnChange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="account"
          label="Username"
          placeholder="Enter your username"
          error={errors.email}
          />
          <Input
          onChangeText={text => handleOnChange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
          />
        </View>
      </View>
      <View style={{alignItems:"center", paddingBottom:49}}>
        <ButtonValid  title='Create account' onPress={validate}/>
      </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchSectionMail:{
    visibility:"hidden",
    flexDirection:'row',
    justifyContent:'center',
    marginLeft:20,
  },
  searchSection:{
    visibility:"hidden",
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
    marginLeft:20,
  },
  searchIcon:{
    marginLeft:10,
    marginTop:20,
  },
  input:{
    flex: 1,
    height: 40,
    width:10,
    marginTop: 4,
    marginRight:50,
    marginLeft:10,
    borderBottomWidth:1,
    paddingTop: 15,
  },
  stretch: {
    width: 160,
    height: 160,
    resizeMode: 'stretch',
  },
});