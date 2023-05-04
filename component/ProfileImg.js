import { View, Text, Image } from 'react-native'
import React from 'react'
import img from '../assets/icon.png'

const ProfileImg = () => {
  return (
    <View
    className=''
    >
	<Text>Hello</Text>
	<Image
	source={img}
        //   source={{ uri: "https://thumbs.dreamstime.com/z/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" }}
	  className="w-\ h-100"
        />
    </View>
  )
}

export default ProfileImg