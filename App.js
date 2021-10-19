
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import { AppTabNavigator } from './components/AppTabNavigator';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import DonateScreen from './screens/DonateScreen';
import AdoptScreen from './screens/AdoptScreen';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component{
  render(){
  return(
    <SafeAreaProvider>
          <AppContainer/>
    </SafeAreaProvider>
     
   
  );
}
}
const switchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
 
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer=createAppContainer(switchNavigator)

