import React, { Component } from 'react';
import { Button, View, Text ,Modal,TouchableOpacity,Alert,StyleSheet,ScrollView,TextInput, KeyboardAvoidingView} from 'react-native';
import db from '../config'
import firebase  from 'firebase';
import {Card,Header,Icon} from 'react-native-elements'
export default class DonarDetailsScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
            donarId:this.props.navigation.getParam('details')['userID'],
            donateId:this.props.navigation.getParam('details')['donateID'],
            petAge:this.props.navigation.getParam('details')['petAge'],
            petBreed:this.props.navigation.getParam('details')['petBreed'],
            donarName:'',
            donarAddress:'',
            donarContact:'',
            donarDonateDocId:''

        }
    }

    getDonarDetails(){
       db.collection('users').where('emailId','==',this.state.donarId).get()
       .then(snapshot=>{
           snapshot.forEach(doc=>{
              this.setState({
                  donarName:doc.data().firstName,
                  donarContact:doc.data().contact,
                  donarAddress:doc.data().address
              })
           })
       })
       db.collection('Donations').where('donateId','==',this.state.donateId).get()
       .then(snapshot=>{
           snapshot.forEach(doc=>{
               this.setState({
                   donarDonateDocId:doc.id
               })
           })
       })
    }
    componentDidMount(){
        this.getDonarDetails()
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.1}}>
                     <Header 
                     leftComponent={<Icon name='arrow-left' type='feather' color='red' 
                     onPress={()=>{
                         this.props.navigation.goBack()
                     }}
                     />}
                     centerComponent={{text:'Donar Details', style:{fontSize:30,fontWeight:'bold',marginTop:20}}}
                     backgroundColor='green'
                     />
                </View>

                     <View style={{flex:0.3}}>
                         <Card title={'Pet Information'} titleStyle={{fontSize:20}}>
                           <Card>
                               <Text style={{fontWeight:'bold'}}>
                                  PetAge:{this.state.petAge}
                               </Text>
                           </Card>
                           <Card>
                               <Text style={{fontWeight:'bold'}}>
                                  PetBreed:{this.state.petBreed}
                               </Text>
                           </Card>
                         </Card>

                     </View>

                     <View style={{flex:0.3}}>
                     <Card title={'Donar Information'} titleStyle={{fontSize:20}}>
                           <Card>
                               <Text style={{fontWeight:'bold'}}>
                                  Name:{this.state.donarName}
                               </Text>
                           </Card>
                           <Card>
                               <Text style={{fontWeight:'bold'}}>
                                  Contact:{this.state.donarContact}
                               </Text>
                           </Card>
                           <Card>
                               <Text style={{fontWeight:'bold'}}>
                                  Address:{this.state.donarAddress}
                               </Text>
                           </Card>
                         </Card> 

                     </View>

            </View>
        )
    }

}