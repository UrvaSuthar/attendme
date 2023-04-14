import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TextInput } from 'react-native';
import Timetable from './Timetable';


const HomeScreen = ({ navigation }) => {
  const nav = () => { navigation.replace('Login') };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-4'>
      <View
        className='flex-row pb-3 mt-5 items-center space-x-3 mx-4 border border-black rounded-lg font-medium border-r-2 border-b-2'
      >
        <Image
          source={{ uri: "https://thumbs.dreamstime.com/z/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" }}
          className='h-16 w-16 bg-red-400 m-2 -mr-1 mt-5 rounded-full'
        />
        <View className='flex-1'>
          <Text className='text-bold text-gray-500 mt-1 text-lg'>
            Hello 👋,
          </Text>
          <Text className='text-bold text-xl'>
            Name Here 
          </Text>
        </View>
      </View>

      <View className="m-4 p-1 bg-gray-200 border border-black rounded-lg font-medium border-r-2 border-b-2">
        <Text className="text-xl text-gray-800 font-semibold m-3">Mark Attendance</Text>
        {/* create a button to enable Location */}
        <TouchableOpacity
          className="items-left m-2 bg-yellow-300 p-3 text-sm border border-black rounded-lg font-medium border-r-2 border-b-2 justify-center pl-8 w-2/4"

          activeOpacity={0.7}
        >
          <Text
          >Enable Location</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="items-left mx-8 bg-red-300 p-3 text-sm border border-black rounded-lg font-medium border-r-2 border-b-2 justify-center w-1/4"
        activeOpacity={0.7}
        onPress={() => { navigation.navigate(Timetable) }}
      >
        <Text
        >TimeTable</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})