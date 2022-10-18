import {React, useState, useEffect} from "react";
import { Modal, View, Text, Pressable, Alert,StyleSheet, Image,TouchableOpacity, TextInput, Keyboard } from "react-native";
import {itemData} from "../list/List_icons";

const Modal_AddNotes = ({
    visibility,
    onPress= () => {},
}) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const [changeMarginTop, setChangeMarginTop] = useState("1%")
    const [changeHeight, setChangeHeight] = useState("20%")
    const [ModalCenter, setModalCenter] = useState("center")

        useEffect( () =>{
            const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
                setChangeMarginTop("25%")
                setChangeHeight("40%")
                setModalCenter("null")
              });
              const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
                setChangeMarginTop("1%")
                setChangeHeight("50%")
                setModalCenter("center")
              });
        },[])

    const Item = ({item}) => {
        return <TouchableOpacity style={{}} onPress={() => setSelectedItem(item.key)}>
            {selectedItem === item.key ? (
                <View key={item.key} style={styles.item_valid}>{item.icon}</View>
            ) : selectedItem !== item.key ?(
                <View key={item.key} style={styles.item}>{item.icon}</View>
            ) : null
            }
            </TouchableOpacity>;
      };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibility}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={{flex: 1,alignItems:"center", justifyContent:ModalCenter,backgroundColor:'rgba(194, 194, 194, 0.7)'}}>
                <View style={{marginTop:changeMarginTop, justifyContent:"center", backgroundColor:"white",opacity:0.99,borderRadius:20,width:"85%",alignItems: "center",shadowColor: "#000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 4,elevation:5}}>
                    <View style={{width:'100%', height:30, alignItems:'flex-start', justifyContent:'center'}}>
                        <TouchableOpacity onPress={onPress} style={{paddingHorizontal:5, paddingTop:15}}>
                            <Image style={{width: 30, height: 30}} source={require('../img/cross_30.png')}/>
                        </TouchableOpacity>
                    </View>

                    <Text style={{color:"black", fontSize:20, fontWeight:"bold"}}>Choose icon :</Text>
                    <View style={styles.ListeIcon}>
                        {itemData.map((item) => {
                            return <Item item={item} />;
                        })}
                    </View>
                    <View style={styles.Name}>
                        <Text style={{color:"black", fontSize:20, fontWeight:"bold"}}>Saisir un nom de projet :</Text>
                        <TextInput style={{borderWidth:1, width:50}} onChangeText={"value"}></TextInput>
                    </View>
                </View>
            </View>
        </Modal>
    ); 
};

const styles = StyleSheet.create({
    ListeIcon: {
        // flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        //height:100,
        marginTop:8,
      },
      Name:{
        marginTop:"5%",
        marginBottom:"5%",
      },
      item: {
        justifyContent:"center",
        alignItems: "center",
        borderRadius:25,
        width: 40,
        height: 40,
        margin:10
      },
      item_valid: {
        justifyContent:"center",
        alignItems: "center",
        borderWidth:2,
        borderRadius:25,
        backgroundColor:"#00ccff",
        width: 40,
        height: 40,
        margin:10
      }
});
//Data icon
// const itemData = [
//     {
//         icon: (
//         <Icon_F name="city" size={15}/>
//         ),
//         key:1,
//     },
//     {
//         icon: (
//             <Icon_F name="pizza-slice" size={15}/>
//         ),
//         key:2,
//     },
//     {
//         icon: (
//             <Icon_F name="birthday-cake" size={15}/>
//         ),
//         key:3,
//     },
//     {
//         icon: (
//             <Icon_F name="shopping-cart" size={15}/>
//         ),
//         key:4,
//     },
//     {
//         icon: (
//             <Icon_F name="car-side" size={15}/>
//         ),
//         key:5,
//     },
//     {
//         icon: (
//             <Icon_F name="skiing" size={15}/>
//         ),
//         key:6,
//     },
//     {
//         icon: (
//             <Icon_F name="umbrella-beach" size={15}/>
//         ),
//         key:7,
//     },
//     {
//         icon: (
//             <Icon_F name="house-user" size={15}/>
//         ),
//         key:8,
//     },
//     {
//         icon: (
//             <Icon_F name="cocktail" size={15}/>
//         ),
//         key:9,
//     },
//     {
//         icon: (
//             <Icon_F name="gift" size={15}/>
//         ),
//         key:10,
//     },
//     ];


  export default Modal_AddNotes;
