import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodayGamesScreen from '../screens/TodayGamesScreen';
import PredictionActionSheet from '../components/PredictionActionSheet';
import TabNavigation from './TabNavigation';

const Router = () => {
  // Create a navigation stack using react-navigation's createNativeStackNavigator
  const Stack = createNativeStackNavigator();

  return (
    //  Initialize the navigation container with a reference to enable programmatic navigation
    <NavigationContainer ref={navigationRef}>
      {/* Create a stack navigator with no header shown by default */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Define a screen named "TodayGamesScreen" that uses the TodayGamesScreen component */}
        <Stack.Screen name="TodayGamesScreen" component={TodayGamesScreen} />
        {/* Define a screen named "TabNavigation" that uses the TabNavigation component */}
        <Stack.Screen name="HomeScreen" component={TabNavigation} />
      </Stack.Navigator>
      {/* Render the PredictionActionSheet component outside the navigator for global access */}
      <PredictionActionSheet />
    </NavigationContainer>
  );
};

export default Router;
