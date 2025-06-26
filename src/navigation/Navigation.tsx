import React from 'react';
import ChatsList from '../screens/ChatsList';
import UpdatesList from '../screens/UpdatesList';
import CommunityList from '../screens/CommunityList';
import CallsList from '../screens/CallsList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from '../theme/Colors';
NavigationContainer;

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarStyle: { backgroundColor: Colors.background, height: 100 },
          tabBarIconStyle: { color: Colors.primaryColor, height: 50, width: 'auto' },
          tabBarLabelStyle: { color: Colors.white, fontSize: 15 },
          tabBarInactiveTintColor: Colors.secondaryColor,
        }}
      >
        <Tab.Screen name="ChatsList" component={ChatsList} />
        <Tab.Screen name="UpdatesList" component={UpdatesList} />
        <Tab.Screen name="CommunityList" component={CommunityList} />
        <Tab.Screen name="CallsList" component={CallsList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
