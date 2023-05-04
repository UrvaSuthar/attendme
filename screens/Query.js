import React, { useState } from 'react';
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const Query = ({navigation}) => {
  const [query, setQuery] = useState('');

  const handleQuerySubmit = () => {
    MailComposer.composeAsync({
      recipients: ['shatel7448@gmail.com'],
      subject: 'Query',
      body: query,
    });
    setQuery('');
  };

  return (
    <View className=" h-screen bg-stone-100 p-5">
    <View className="flex-col items-center p-4 bg-white border border-black rounded-md border-r-5 border-b-4">
      <TextInput
        value={query}
        onChangeText={setQuery}
	className="w-60 p-2  bg-slate-100 my-2 border border-black border-r-2 border-b-2 placeholder:text-sm hover:border-spacing-2 rounded"        placeholder="Enter your query here"
      />
      { <TouchableOpacity 
      title="Submit"
      className="bg-blue-300 p-2 px-4 mb-2 text-sm border border-black rounded-lg font-regular border-r-2 border-b-2 hover:bg-blue-500 hover:text-white" 
      onPress={handleQuerySubmit} > 
      <Text>Submit</Text>
      </TouchableOpacity>}

      
    </View>
    </View>
  );
};

export default Query