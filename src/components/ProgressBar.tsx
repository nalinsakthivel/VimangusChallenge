import React, {useEffect, useState} from 'react';
import {ProgressBar} from 'rn-multi-progress-bar'; // Import ProgressBar component
import {StyleSheet, View} from 'react-native';
import {MyColors} from '../values/MyColor';

// Define props for the MultiProgressBar component
interface ProgressProps {
  successCount: number; // Count of successful progress bars
  failureCount: number; // Count of failure progress bars
}

// MultiProgressBar component
const MultiProgressBar: React.FC<ProgressProps> = ({
  successCount,
  failureCount,
}) => {
  // Define state variables to manage total and percentage values
  const [total, setTotal] = useState(successCount + failureCount);
  const [successPercentage, setSuccessPercentage] = useState(0);
  const [failurePercentage, setFailurePercentage] = useState(0);

  // Use the 'useEffect' hook to update percentages when 'successCount' or 'failureCount' change
  useEffect(() => {
    const newTotal = successCount + failureCount;
    const newSuccessPercentage = (successCount / newTotal) * 100 || 0;
    const newFailurePercentage = (failureCount / newTotal) * 100 || 0;

    // Update the state with the new values
    setTotal(newTotal);
    setSuccessPercentage(newSuccessPercentage);
    setFailurePercentage(newFailurePercentage);
  }, [successCount, failureCount]);

  // If the total is 0, return null (no progress to display)
  if (total === 0) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      {/* Display the success progress bar if 'successCount' is greater than 0 */}
      <View
        style={{
          width: `${successPercentage}%`,
          backgroundColor: MyColors.progressSuccess,
          height: 10,
          marginVertical: 20,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}>
        {/* {successCount !== 0 && (
          <ProgressBar
            shouldAnimate={true}
            animateDuration={1000}
            data={[{progress: 100, color: MyColors.progressSuccess}]}
            barHeight={10}
          />
        )} */}
      </View>

      {/* Display the failure progress bar if 'failureCount' is greater than 0 */}
      <View
        style={{
          width: `${failurePercentage}%`,
          backgroundColor: MyColors.progressFailure,
          height: 10,
          marginVertical: 20,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}>
        {/* {failureCount !== 0 && (
          <ProgressBar
            shouldAnimate={true}
            animateDuration={1000}
            data={[{progress: 100, color: MyColors.progressFailure}]}
            barHeight={10}
          />
        )} */}
      </View>
    </View>
  );
};

export default MultiProgressBar;

const styles = StyleSheet.create({
  mainContainer: {flexDirection: 'row', width: '100%'},
});
