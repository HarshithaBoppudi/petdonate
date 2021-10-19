import React, { Component } from 'react';
import { AppTabNavigator } from './AppTabNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer'
import { Icon } from 'react-native-elements';

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
    screen:AppTabNavigator,
    
    },
},
    
    



{initialRouteName:'Home'}
)