import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import {auth} from '../firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = ({navigation}) => {
  const nav = ()=>{navigation.replace("Home")};
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Test',
      headerShown: false,
    });
  }, []);

  const RegisterUser = async ()=>{ 
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential)
      alert(user+" created successfully!")
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage +" "+ auth);
      RegisterUser()
      // ..
    });
  }

  const LoginUser =  ()=>{
     signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorCode +" "+ auth);
      }); 
  } 
  


  return (
    <View className="flex-1 items-center justify-center bg-stone-100">
      <View className="flex-col items-center p-2 px-4 bg-yellow-300 border border-black rounded-md border-r-4 border-b-4">
        <Text className="text-xl font-bold m-2">Login</Text>  
        <TextInput
          placeholder='Email'
          className="w-60 p-2  bg-slate-100 my-2 border border-black border-r-2 border-b-2 placeholder:text-sm hover:border-spacing-2 rounded"
          value = {email}
          onChangeText = {(text) => setEmail(text)}
        />
        <TextInput
          placeholder='Password'
          className="w-60 p-2 bg-slate-100 mb-3 border border-black border-r-2 border-b-2 placeholder:text-sm hover:border-spacing-2 rounded "
          value = {password}
          onChangeText = {(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity
        onPress = {()=>{navigation.replace('Home')}}
        >
          <Text className="bg-blue-300 p-2 px-4 mb-2 text-sm border border-black rounded-lg font-regular border-r-2 border-b-2 hover:bg-blue-500 hover:text-white">Submit</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
        onPress = {RegisterUser }
        >
          <Text className="text-center text-blue-500 bg-white rounded-xl w-60 p-3 ">SignUp</Text>
        </TouchableOpacity> */}

      </View>
    </View>
  )
}

export default LoginScreen