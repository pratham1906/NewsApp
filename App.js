import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopTabNavigator from './Navigators/TopNavigator'
import {NavigationContainer} from '@react-navigation/native'
import DataItem from './Components/DataItem'
import General from './Screens/General'
export default function App() {
  return (
  <View style={styles.container}>
      <General/>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
