import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';

const HomeScreen = ({navigation}) => {
  const nav = ()=>{navigation.replace('Login')};
  return (
    <View className="flex-1 items-center justify-center ">
      <View className="items-center bg-red-200 rounded-lg p-4 py-6">
      <Text className="text-2xl">Hello, 👋</Text>
      <TouchableOpacity
      onclick={nav}
      >
        <Text className="text-center text-blue-500 bg-white rounded-xl w-60 p-3 m-2">LogOut</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})