import { View, Text, Image } from 'react-native'
import React from 'react'
import ProfileImg from '../component/ProfileImg'


const Profile = () => {
  return (
    <View
    className = "flex-1 items-center bg-white"
    >
	<Text>Hello</Text>
	<Image
          source={{ uri: "https://thumbs.dreamstime.com/z/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" }}
          className='h-32 w-32 m-2 -mr-1 mt-5 rounded-full'
        />
	<View
	>

	</View>
    </View>
  )
}

export default Profile