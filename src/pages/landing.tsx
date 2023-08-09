import {View, Text, ImageBackground, SafeAreaView, Platform, StatusBar, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react';

export default function Landing() {
  return (
    <ImageBackground
      source={require('../assets/landingBg.jpeg')}
      resizeMode="cover"
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
        <SafeAreaView
      className="flex-1 w-[95%] mx-auto justify-end"
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>

      <View>
        <Text className="text-white text-sm" >Achieving your goals.</Text>
        <Text className='text-white text-6xl mt-5'>Effortlessly manage your to-do list and take control of your day</Text>
        <TouchableOpacity className='bg-zinc-700 items-center flex-row p-[6px] rounded-full w-52 my-5'>
            <View className='bg-orange-600 w-16 h-16 mr-4 rounded-full justify-center items-center'>
            <AntDesign name="arrowright" color='#fff' size={26}/>
            </View>
            <View>
                <Text className='text-lg text-white'>Get Started</Text>
            </View>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
