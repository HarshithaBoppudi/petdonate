import React, { Component } from 'react';
import { Button, View, Text ,Modal,TouchableOpacity,Alert,StyleSheet,ScrollView,TextInput, KeyboardAvoidingView} from 'react-native';
import db from '../config'
import firebase  from 'firebase';
import {Card,Header,Icon} from 'react-native-elements'


export default class  MyHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <Header 
                     leftComponent={<Icon name='home' type='fontawesome5' color='pink' 
                        
                     />}
                     centerComponent={{text:this.props.title, style:{fontSize:30,fontWeight:'bold',marginTop:20}}}
                     backgroundColor='aqua'
                    
                     />
    )
                    }
}