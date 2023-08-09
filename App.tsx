import React from 'react';
import {Platform, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Landing from 'root/pages/landing';

const App = () => {
  return (
    // <SafeAreaView
    //   className="flex-1"
    //   style={{
    //     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //   }}>
    <View className='flex-1'>
      <Landing />
    </View>
    // </SafeAreaView>
  );
};

export default App;
