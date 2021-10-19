import React, { Component } from 'react';
import { Button, View, Text ,Modal,TouchableOpacity,Alert,StyleSheet,
ScrollView,TextInput, KeyboardAvoidingView,FlatList,Image}from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen';
import AdoptScreen from '../screens/AdoptScreen';
import { AppStackNavigator } from './AppStackNavigator';


export const AppTabNavigator=createBottomTabNavigator({
    DonateScreen:{
    screen:DonateScreen,
    navigationOptions:{
        tabBarIcon:<Image source={require('../assets/pet1.jpg')} style={{width:30,height:30}}/>,
        tabBarLabel:'Donate Pets'
    }
    },
    AdoptScreen:{
        screen:AppStackNavigator,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/pet2.jpg')} style={{width:30,height:30}}/>,
            tabBarLabel:'Adopt Pets'
        }
        },


})