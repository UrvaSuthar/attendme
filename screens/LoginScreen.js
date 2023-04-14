import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import {auth} from '../firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";



const LoginScreen = ({navigation}) => {
  const nav = ()=>{navigation.replace("Home")};
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const RegisterUser = async ()=>{ await createUserWithEmailAndPassword(auth, email, password)
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
      // ..
    });
  }

  return (
    <View className="flex-1 items-center justify-center ">
      <View className="items-center bg-red-300 rounded-lg p-4 py-6">
        <TextInput
          placeholder='Email'
          className="w-80 p-3 rounded-xl mb-2 bg-slate-100"
          value = {email}
          onChangeText = {(text) => setEmail(text)}
        />
        <TextInput
          placeholder='Password'
          className="w-80 p-3 rounded-xl bg-slate-100"
          value = {password}
          onChangeText = {(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity

        >
          <Text className="text-center text-white bg-blue-500 rounded-xl w-60 p-3 my-2">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress = {RegisterUser }
        >
          <Text className="text-center text-blue-500 bg-white rounded-xl w-60 p-3 ">SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen