import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopTabNavigator from './Navigators/TopNavigator'
import {NavigationContainer} from '@react-navigation/native'
import DataItem from './Components/DataItem'
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default function App() {
  return (
 <>
 <Header style={{backgroundColor:'#009387',alignItems:'center'}}>
   <Title style={{color:'black',fontWeight:'bold'}}>Current News</Title>
 </Header>
     <TopTabNavigator/>
     </>

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
