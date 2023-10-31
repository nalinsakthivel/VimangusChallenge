import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Router from './src/routes/Router';
import {StatusBar} from 'react-native';
import {MyColors} from './src/values/MyColor';

const App = () => {
  return (
    // Set the safe area provider with initial window metrics to handle safe areas on different devices
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {/* Set the status bar style and background color */}
      <StatusBar backgroundColor={MyColors.white} barStyle={'dark-content'} />
      {/* Load the application's router, which handles navigation */}
      <Router />
    </SafeAreaProvider>
  );
};

export default App;
