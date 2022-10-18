import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import ButtonValid from "../components/ButtonValid";
import Modal_AddNotes from "../components/Modal_AddNotes";

export default function Notes(){
    
    const navigation = useNavigation();

    const [ModalVisible, setModalVisible] = useState(false);
    const [ValueNumber, setValueNumber] = useState(2);

    return (
         <SafeAreaView style={{backgroundColor:"green", flex:1, flexDirection:"column"}}>
            <Modal_AddNotes visibility={ModalVisible} onPress={() => setModalVisible(false)}/>
          <View style={{backgroundColor:"white",height:"100%", paddingTop:"5%",marginTop:50, borderTopRightRadius:45, borderTopLeftRadius:45}}>
             <Text style={{fontSize:35, fontWeight:"bold", textAlign:"center"}}>Nombre de Projects :</Text>
             <Text style={{fontSize:35, fontWeight:"bold", textAlign:"center", color:"#2a2a2a"}}>{ValueNumber}</Text>
             <View style={{marginTop:20, height:"58%"}}>
                 <ScrollView>
                     <View style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                         <TouchableOpacity style={{backgroundColor:"lightgray", width:"90%", marginBottom:14,borderRadius:35, flexDirection:"column", paddingHorizontal:15}}>
                            <View style={{alignItems:"center", flexDirection:"row", height:90}}>
                                 <View style={{ borderColor:"black", borderWidth:2, borderRadius:10, backgroundColor:"white"}}>
                                    {/* <Icon name="eiffel-tower" size={60}/> */}
                                 </View>
                                  <View style={{flexDirection:"column", paddingHorizontal:10, width:"80%"}}>
                                     <Text style={{fontWeight:"bold", fontSize:20}}>Bordeaux</Text>
                                     <Text style={{fontWeight:"600"}}>3 personnes</Text>
                                    <View style={{width:"100%"}}>
                                         <Text style={{textAlign:"right", fontWeight:"bold", fontSize:15}}>2 624,50€</Text>
                                     </View>
                                 </View>
                             </View>
                         </TouchableOpacity>
                         <View style={{backgroundColor:"lightgray", width:"90%", height:100,marginBottom:14,borderRadius:35}}></View>
                         <View style={{backgroundColor:"lightgray", width:"90%", height:100,marginBottom:14,borderRadius:35}}></View>
                         <View style={{backgroundColor:"lightgray", width:"90%", height:100,marginBottom:14,borderRadius:35}}></View>
                         <View style={{backgroundColor:"lightgray", width:"90%", height:100,marginBottom:14,borderRadius:35}}></View>
                    </View>
                 </ScrollView>
             </View>
             <View style={{alignItems:"center"}}>
             <ButtonValid  title='Ajouter un projet' onPress={() => setModalVisible(true)}/>
             </View>
         </View> 
     </SafeAreaView>
    )
}