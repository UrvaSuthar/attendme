import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Timetable = () => {
  return (
    <View className="m-4 h-2/5 border border-black border-r-2 border-b-2 rounded ">
      <Image
      source={{uri:"https://lh5.googleusercontent.com/hsgj6KTwyhKBa4qiu7aYkqXd3IDTxrCYVCDoV7TBz5IN_yoozCvZhrAXsptm4p8Cwn7l1G6XpMnoc_VO_XqXPx5eLO0ZvrDP--5Lc8Iz9Nc9KuRySpPgTaJ1FLyprRgPog=w1280"}}
      className="h-full w-auto "
      />
    </View>
  )
}

export default Timetable