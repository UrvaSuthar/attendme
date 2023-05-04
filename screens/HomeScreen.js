import { Image, SafeAreaView, StyleSheet, Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Timetable from './Timetable';
import client from '../sanity';
import 'react-native-url-polyfill/auto';
import Query from './Query';
import { PieChart } from 'react-native-chart-kit';


const Present = 75;

const data = [
	{
		name: 'Present',
		attendance: Present,
		color: '#32CD32',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	},
	{
		name: 'Absent',
		attendance: 100 - Present,
		color: 'red',
		legendFontColor: '#7F7F7F',
		legendFontSize: 15,
	}
];

const chartConfig = {
	backgroundColor: '#ffffff',
	backgroundGradientFrom: '#ffffff',
	backgroundGradientTo: '#ffffff',
	decimalPlaces: 0, // optional, defaults to 2dp
	color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
	labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
	style: {
		borderRadius: 16,
	},
};





const HomeScreen = ({ navigation }) => {
  const nav = () => { navigation.replace('Login') };
  const [name, setName] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client.fetch(`
    *[_type=="class"]{
      ...,
      students[]->{
        ...,
      }
    }
      `)
    .then(data => { 
      setName(data) 
    })
    .catch(
      err => console.error(err)
    )
  }, [])
// console.log(name)
const name1 = JSON.stringify(name)
console.log(name)
  return (
    <SafeAreaView className='bg-white pt-4 h-screen'>
      <View
        className='flex-row pb-3 mt-5 items-center space-x-3 mx-4 border border-black rounded-lg font-medium border-r-2 border-b-2'
      >
        <TouchableOpacity
        onPress={()=>{navigation.navigate("Profile")}}
        >
        <Image
          source={{ uri: "https://thumbs.dreamstime.com/z/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" }}
          className='h-16 w-16 m-2 -mr-1 mt-5 rounded-full'
        />
        </TouchableOpacity>
        <View className='flex-1'>
          <Text className='text-bold text-gray-500 mt-1 text-lg'>
            Hello 👋,
          </Text>
          <Text className='text-bold text-xl'>
            Urva (20012021062)
          </Text>
          {/* map names in this text */}
          {/* {className?.students.map((class) => {
            return( <Text className='text-bold text-xl'>
            {className.students.name}</Text>)
          })}
          <Text className='text-bold text-xl'>
            {className.name} */}
          {/* </Text> */}
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
      <View className="flex-row">
      <TouchableOpacity
        className="items-left ml-8 bg-red-300 p-3 text-sm border border-black rounded-lg font-medium border-r-2 border-b-2 justify-center w-auto"
        activeOpacity={0.7}
        onPress={() => { navigation.navigate(Timetable) }}
      >
        <Text
        >TimeTable</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-left mx-5 bg-blue-300 p-3 text-sm border border-black rounded-lg font-medium border-r-2 border-b-2 justify-center w-auto"
        activeOpacity={0.7}
        onPress={() => { navigation.navigate(Query) }}
      >
        <Text
        >I Have Query 🙋🏻</Text>
      </TouchableOpacity>
      </View>
      <View className="bg-slate-200 m-3 rounded border border-black font-medium border-r-2 border-b-2">
					<PieChart
						data={data}
						width={Dimensions.get('window').width}
						height={220}
						chartConfig={chartConfig}
						accessor="attendance"
						backgroundColor="transparent"
						paddingLeft="15"
					/>
				</View>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})