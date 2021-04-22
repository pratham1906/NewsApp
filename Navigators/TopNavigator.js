import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import General from '../Screens/General'
import Business from '../Screens/Business'
import Tech from '../Screens/Tech'
const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="General" component={General} />
      <Tab.Screen name="Business" component={Business} />
      <Tab.Screen name="Technology" component={Tech} />

    </Tab.Navigator>
  );
}

export default TopTabNavigator;