import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Router from './src/routes/Routes';
import {StatusBar} from 'react-native';
import {MyColors} from './src/values/MyColor';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar backgroundColor={MyColors.white} barStyle={'dark-content'} />
      <Router />
    </SafeAreaProvider>
  );
};

export default App;
