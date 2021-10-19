import React, { Component } from 'react';
import { Button, Image,View, Text ,Modal,TouchableOpacity,Alert,StyleSheet,ScrollView,TextInput, KeyboardAvoidingView,FlatList} from 'react-native';
import db from '../config'
import firebase  from 'firebase';
import { ListItem } from 'react-native-elements' ;
import MyHeader from '../components/MyHeader';
import { Icon ,Avatar} from 'react-native-elements';
export default class AdoptScreen extends Component {
    constructor(){
        super()
        this.state={
            donatedPetList:[],


        }
        this.donateRef=null
    }

    getDonatedPetList=()=>{
        this.donateRef=db.collection('Donations')
        .onSnapshot((snapshot)=>{
            var donatedPetList=snapshot.docs.map(document=>document.data())
            this.setState({
                donatedPetList:donatedPetList
            })
        })

     }

     componentDidMount(){
         this.getDonatedPetList()
     }
     componentWillUnmount(){
         this.donateRef()
     }

     keyExtrator=(item,index)=>index.toString()
     renderItem=({item,index})=>{
         return(
             <ListItem key={index} bottomDivider>
             <Image style={{height:50,width:50}}
             source={{uri:item.image}}
             />
             <ListItem.Content>
                 <ListItem.Title style={{color:'red',fontWeight:'bold'}}>
                     {item.petBreed}
                 </ListItem.Title>
                 <ListItem.Subtitle style={{color:'red'}}>
                     {item.petAge}
                 </ListItem.Subtitle>
                 <TouchableOpacity styles={styles.button}
                 onPress={()=>{
                     this.props.navigation.navigate('DonarDetails',{'details':item})
                 }}
                 >
                     <Text style={{marginLeft:290,marginTop:-30}}>
                         View
                     </Text>
                   </TouchableOpacity>

             </ListItem.Content>
             
             </ListItem>
             

         )
     }
    render(){
        return(
            <View style={{flex:1}}>
           <MyHeader title='Adopt Pets'/>
           <TouchableOpacity style={styles.logoutButton}
                onPress={()=>{
                    this.props.navigation.navigate('LoginScreen')
                    firebase.auth().signOut()
                }}
               >
                   <Icon name='logout' type='antdesign'/>
                       
               </TouchableOpacity>

               <View>
                   {this.state.donatedPetList.length===0?(<View><Text>No Donations Available</Text></View>)
                   :(<View>
                    <FlatList 
                    keyExtractor={this.keyExtrator}
                    data={this.state.donatedPetList}
                    renderItem={this.renderItem}
                    />
                   </View>)
                    }
               </View>

            </View>
        )
    }

}
const styles=StyleSheet.create({
    button:{
        width:200,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        //marginTop:-30,
       // marginLeft:290
      },
      title:{
        fontSize:60,
        fontWeight:'bold',
        paddingBottom:30,
        color:'#ff6100',
        marginTop:25
        
      },
      logoutButton:{
        height:30,
        justifyContent:'center',
        marginLeft:290,
        marginTop:-35
    }
})