import {SetStateAction, useState} from 'react';

// Custom hook for managing state and actions related to the ProfileScreen
export const useProfileScreen = () => {
  // State to store the notification count with an initial value of 1
  const [notifiCount, setNotifiCount] = useState<number>(1);

  // State to track the active tab with an initial value of 'Games Played'
  const [tab, setTab] = useState<string>('Badges');

  // Function to handle tab changes and update the 'tab' state
  const onTabChange = (e: SetStateAction<string | undefined>) => {
    setTab(e);
  };

  // Return the state variables and the tab change function
  return {
    notifiCount, // The current notification count
    tab, // The active tab
    onTabChange, // Function to change the active tab
  };
};
