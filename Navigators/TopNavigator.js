
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import General from '../Screens/General'
import Business from '../Screens/Business'
import Tech from '../Screens/Tech'
import { NavigationContainer } from '@react-navigation/native';
import { HeaderTitle } from '@react-navigation/stack';
const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
      <NavigationContainer >
    <Tab.Navigator  tabBarOptions={{style:{backgroundColor:'#009387'}}} >
      <Tab.Screen name="General" component={General}/>
      <Tab.Screen name="Business" component={Business} />
      <Tab.Screen name="Technology" component={Tech} />

    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TopTabNavigator;