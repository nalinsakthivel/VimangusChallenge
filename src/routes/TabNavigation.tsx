import {Image, Text} from 'react-native';
import React from 'react';
import {MyColors} from '../values/MyColor';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LeaguesScreen from '../screens/LeaguesScreen';
import ResearchScreen from '../screens/ResearchScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Define a functional component called TabNavigation.
const TabNavigation = () => {
  const Tab = createBottomTabNavigator(); // Create a Tab navigator using createBottomTabNavigator.

  return (
    <Tab.Navigator
      initialRouteName="Profile" // Set the initial route name to 'Profile'.
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: MyColors.white, // Set the background color of the tab bar.
          height: 60, // Set the height of the tab bar.
        },
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={{
                color: focused ? MyColors.primary : MyColors.secondary, // Set text color based on whether the tab is focused or not.
                fontFamily: 'Montserrat-Bold', // Set the font family for the tab label.
                fontSize: 10, // Set the font size for the tab label.
              }}>
              {route.name}{' '}
              {/* Display the name of the route as the tab label. */}
            </Text>
          );
        },
        tabBarIcon: ({focused}) => {
          let source = require('../assets/images/home.png'); // Set a default image source.

          // Check the name of the route and set the appropriate image source.
          if (route.name === 'Home') {
            source = require('../assets/images/home.png');
          } else if (route.name === 'Leagues') {
            source = require('../assets/images/trophy.png');
          } else if (route.name === 'Research') {
            source = require('../assets/images/research.png');
          } else if (route.name === 'Leaderboard') {
            source = require('../assets/images/Leaderboard.png');
          } else if (route.name === 'Profile') {
            source = require('../assets/images/profile.png');
          } else {
            source = require('../assets/images/home.png');
          }

          return (
            <Image
              source={source}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? MyColors.primary : MyColors.secondary,
              }}
            />
          );
        },
        tabBarActiveTintColor: MyColors.primary,
        tabBarInactiveTintColor: MyColors.secondary,
      })}>
      <Tab.Screen
        name={'Home'} // Define the name for the 'Home' tab.
        options={{headerShown: false}} // Hide the header for this screen.
        component={HomeScreen} // Use the HomeScreen component for this tab.
      />
      <Tab.Screen
        name={'Leagues'} // Define the name for the 'Leagues' tab.
        options={{headerShown: false}} // Hide the header for this screen.
        component={LeaguesScreen} // Use the LeaguesScreen component for this tab.
      />
      <Tab.Screen
        name={'Research'} // Define the name for the 'Research' tab.
        options={{headerShown: false}} // Hide the header for this screen.
        component={ResearchScreen} // Use the ResearchScreen component for this tab.
      />
      <Tab.Screen
        name={'Leaderboard'} // Define the name for the 'Leaderboard' tab.
        options={{headerShown: false}} // Hide the header for this screen.
        component={LeaderBoardScreen} // Use the LeaderBoardScreen component for this tab.
      />
      <Tab.Screen
        name={'Profile'} // Define the name for the 'Profile' tab.
        options={{headerShown: false}} // Hide the header for this screen.
        component={ProfileScreen} // Use the ProfileScreen component for this tab.
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
