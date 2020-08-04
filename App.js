import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.component {
  render()
  {
    return(
      <View style={StyleSheet.container}>
        <Text>open up App.js to start working on your app!</Text>
      </View>

    );
  }
}
const styles =stylesheet.create({
  container: {
    flex:1,
    backgroundcolor :'#0ff',
    alignItems:'center',
    justifyContent: 'center',
  },

});