import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodayGames from '../screens/TodayGames';
import PredictionActionSheet from '../components/PredictionActionSheet';

const Router = () => {
  // Create a navigation stack using react-navigation's createNativeStackNavigator
  const Stack = createNativeStackNavigator();

  return (
    //  Initialize the navigation container with a reference to enable programmatic navigation
    <NavigationContainer ref={navigationRef}>
      {/* Create a stack navigator with no header shown by default */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Define a screen named "TodayGames" that uses the TodayGames component */}
        <Stack.Screen name="TodayGames" component={TodayGames} />
      </Stack.Navigator>
      {/* Render the PredictionActionSheet component outside the navigator for global access */}
      <PredictionActionSheet />
    </NavigationContainer>
  );
};

export default Router;
