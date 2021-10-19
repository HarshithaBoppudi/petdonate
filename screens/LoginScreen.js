import React, { Component } from 'react';
import { Button, View, Text ,Modal,TouchableOpacity,Alert,StyleSheet,ScrollView,TextInput, KeyboardAvoidingView ,Image} from 'react-native';
import db from '../config'
import firebase  from 'firebase';


export default class LoginScreen extends Component {
    constructor(){
        super()
        this.state={
            emailId:'',
            password:'',
            confirmPassword:'',
            firstName:'',
            lastName:'',
            contact:'',
            address:'',
            isModelVisible:false

        }
    }

    userLogin=(emailId,password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId,password)
      .then(()=>{
        this.props.navigation.navigate('DonateScreen')
      })
      .catch((error)=>{
        var errorCode=error.code
        var errorMessage=error.message
        return alert(errorMessage)
      })

    }

    userSignUp=(emailId,password,confirmPassword)=>{
        if(password!==confirmPassword){
               return alert('password dose not match')
        }
        else{
           firebase.auth().createUserWithEmailAndPassword(emailId,password)
           .then(()=>{
             db.collection('users').add({
               firstName:this.state.firstName,
               lastName:this.state.lastName,
               contact:this.state.contact,
               address:this.state.address,
               emailId:this.state.emailId
             })
             return alert('user added successfully','',[
               {text:'OK',onPress:()=>{this.setState({
                 isModelVisible:false
               })}}
             ])
           })
           .catch((error)=>{
            var errorCode=error.code
            var errorMessage=error.message
            return alert(errorMessage)
          })
        }

    }

    showModel=()=>{
      return(
        <Modal animationType='fade' 
        transparent={true}
        visible={this.state.isModelVisible}
        >
          <View style={styles.modalContainer}>
             <ScrollView style={{width:'100%'}}>
               <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                <Text style={styles.modalTitle}>
                  Regestration
                </Text>
                  <TextInput
                  style={styles.fontTextInput}
                  placeholder={'FirstNam'}
                  maxLength={10}
                  onChangeText={(text)=>{
                    this.setState({
                      firstName:text
                    })
                  }}
                  />

                   <TextInput
                  style={styles.fontTextInput}
                  placeholder={'LastName'}
                  maxLength={10}
                  onChangeText={(text)=>{
                    this.setState({
                      lastName:text
                    })
                  }}
                  />  

                  <TextInput
                  style={styles.fontTextInput}
                  placeholder={'contact'}
                  maxLength={10}
                  keyboardType={'numeric'}
                  onChangeText={(text)=>{
                    this.setState({
                      contact:text
                    })
                  }}
                  />   

                  <TextInput
                  style={styles.fontTextInput}
                  placeholder={'address'}
                 multiline={true}
                  onChangeText={(text)=>{
                    this.setState({
                      address:text
                    })
                  }}
                  />  

                  <TextInput
                  style={styles.fontTextInput}
                  placeholder={'email'}
                  keyboardType={'email-address'}
                  onChangeText={(text)=>{
                    this.setState({
                      emailId:text
                    })
                  }}
                  />

                  <TextInput
                  style={styles.fontTextInput}
                  placeholder={'password'}
                  secureTextEntry={true}
                  onChangeText={(text)=>{
                    this.setState({
                      password:text
                    })
                  }}
                  />

                  <TextInput
                  style={styles.fontTextInput}
                  placeholder={'confirmPassword'}
                  secureTextEntry={true}
                  onChangeText={(text)=>{
                    this.setState({
                      confirmPassword:text
                    })
                  }}
                  />

                  <TouchableOpacity style={styles.regesterButton} 
                  onPress={()=>{
                  this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)
                  }}
                  >
                    <Text>
                      Regester
                    </Text>
                     
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancleButton}
                  onPress={()=>{
                    this.setState({
                      isModelVisible:false
                    })
                  }}
                  > 

                  </TouchableOpacity>
               </KeyboardAvoidingView>

             </ScrollView>
          </View>

        </Modal>
      )
    }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#FF00BF'}}>
        <ScrollView>
           <View style={{justifyContent:'center',alignItems:'center'}}>
             {this.showModel()}
           </View>
            <View style={styles.profileContainer}>
             <Text style={styles.title}>
               PET DONATION APP
             </Text>
             <Image source={require('../assets/fatdog.gif')} style={{width:200,height:200}}/>
             <TextInput
             style={styles.loginBox}
             placeholder={'example@gmail.com'}
             keyboardType={'email-address'}
             onChangeText={(text)=>{
               this.setState({
                 emailId:text
               })
             }}
             />

             <TextInput
             style={styles.loginBox}
             placeholder={'password'}
            secureTextEntry={true}
             onChangeText={(text)=>{
               this.setState({
                 password:text
               })
             }}
             />

             <TouchableOpacity style={styles.button}
             onPress={()=>{
               this.userLogin(this.state.emailId,this.state.password)
               
             }}
             >
               <Text style={styles.buttonText}>
                 Login
               </Text>

             </TouchableOpacity>

             <TouchableOpacity style={styles.button}
             onPress={()=>{
               this.setState({
                 isModelVisible:true
               })
             }}
             >
               <Text style={styles.buttonText}>
                 userSignUp
               </Text>

             </TouchableOpacity>

            </View>
        </ScrollView>
       
      </View>
    );
  }
}

const styles=StyleSheet.create({

  modalContainer:{
    flex:1,
    borderRadius:20,
    width:280,
    justifyContent:'center',
    alignItems:'center',
    margin:50,
    backgroundColor:'#61FFFF'
  },
  KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle:{
    fontSize:30,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    color:'black',
    margin:30
  },
  fontTextInput:{
    width:'75%',
    height:35,
    alignSelf:'center',
    borderRadius:10,
    marginTop:10,
    padding:10,
    borderWidth:1
  },
  regesterButton:{
    width:200,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    marginTop:30
  },


  cancleButton:{
    width:200,
    height:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    marginTop:30

  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  loginBox:{
    width:280,
    height:40,
    borderRadius:10,
    borderWidth:1,
    margin:10

  },
  title:{
    fontSize:35,
    fontWeight:'bold',
    paddingBottom:30,
    color:'#00FF40',
    width:'100%',
    alignSelf:'center',
    textAlign:'center',  
    justifyContent:'center',
    marginTop:20
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    marginTop:30
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:20,
    color:'yellow'
  }


})