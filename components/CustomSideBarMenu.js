import React, { Component } from 'react';
import { Button, View, Text ,Modal,TouchableOpacity,Alert,StyleSheet,ScrollView,TextInput, KeyboardAvoidingView,FlatList} from 'react-native';
import db from '../config'
import firebase  from 'firebase';

import {DrawerItems} from 'react-navigation-drawer'

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
               <View style={{flex:0.8}}>
                    <DrawerItems
                    {...this.props}
                    />
               </View>
                 <View style={{flex:0.2}}>
                    <TouchableOpacity style={{height:30,width:'100%',justifyContent:'center'}}
                    onPress={()=>{
                        firebase.auth().signOut()
                        this.props.navigation.navigate('LoginScreen')
                    }}
                    >
                        <Text>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                 </View>
            </View>
        )
    }
}