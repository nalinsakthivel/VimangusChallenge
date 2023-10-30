import {SheetManager} from 'react-native-actions-sheet';
import {TodayGamesProps} from '../screens/TodayGames';

// Define a custom hook called 'useTodayGames' that takes 'TodayGamesProps' as a parameter
export const useTodayGames = (props: TodayGamesProps) => {
  // Define a function 'onUpPress' that will be used to show the action sheet
  const onUpPress = () => {
    SheetManager.show('prediction_sheet');
    // Show the action sheet with the ID 'prediction_sheet'
  };

  // Define a function 'onDownPress' that will be used to hide the action sheet
  const onDownPress = () => {
    SheetManager.hide('prediction_sheet');
    // Hide the action sheet with the ID 'prediction_sheet'
  };

  // Return an object with 'onUpPress' and 'onDownPress' functions
  return {onUpPress, onDownPress};
};

// This code defines a custom hook that provides functions to show and hide an action sheet.
