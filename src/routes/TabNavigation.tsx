import {Image, Text} from 'react-native';
import React from 'react';
import {MyColors} from '../values/MyColor';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LeaguesScreen from '../screens/LeaguesScreen';
import ResearchScreen from '../screens/ResearchScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import ProfileScreen from '../screens/ProfileScreen';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: MyColors.white,
          height: 60,
        },
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={{
                color: focused ? MyColors.primary : MyColors.secondary,
                fontFamily: 'Montserrat-Bold',
                fontSize: 10,
              }}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused}) => {
          let source = require('../assets/images/home.png');

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
        name={'Home'}
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Tab.Screen
        name={'Leagues'}
        options={{headerShown: false}}
        component={LeaguesScreen}
      />
      <Tab.Screen
        name={'Research'}
        options={{headerShown: false}}
        component={ResearchScreen}
      />
      <Tab.Screen
        name={'Leaderboard'}
        options={{headerShown: false}}
        component={LeaderBoardScreen}
      />
      <Tab.Screen
        name={'Profile'}
        options={{headerShown: false}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
