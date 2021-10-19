import React, { Component } from 'react';
import { Button, View, Text ,Modal,TouchableOpacity,Alert,StyleSheet,
ScrollView,TextInput, KeyboardAvoidingView,FlatList,Image}from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import DonateScreen from '../screens/DonateScreen';
import AdoptScreen from '../screens/AdoptScreen';
import DonarDetailsScreen from '../screens/DonarDetailsScreen';

export const AppStackNavigator=createStackNavigator({
   
    AdoptScreen:{
        screen:AdoptScreen,
        navigationOptions:{
           headerShown:false
        }
        },
        DonarDetails:{
            screen:DonarDetailsScreen,
            navigationOptions:{
               headerShown:false
            }
            },


},
{initialRouteName:'AdoptScreen'}
)