import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {MyColors} from '../values/MyColor';
import WheelScrollPicker from './WheelScrollPicker';
import Button from './Button';
import {Coin} from '../assets/svg';

const PredictionActionSheet = () => {
  // Define data for the WheelScrollPicker
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Function to close the action sheet
  const onClose = () => {
    SheetManager.hide('prediction_sheet');
  };

  // Function to handle the value change in the WheelScrollPicker
  const onScrollValue = (e: any) => {
    console.log('scroll picker value :>> ', e);
  };

  return (
    <ActionSheet id="prediction_sheet">
      <View style={styles.rootContainer}>
        {/* Heading */}
        <Text style={styles.headingText}>Your Prediction is Under</Text>
        <View style={styles.infoContainer}>
          {/* Entry Ticket information */}
          <Text style={styles.infoText}>Entry Ticket</Text>
        </View>
        <View style={styles.pickerContainer}>
          {/* WheelScrollPicker for user selection */}
          <WheelScrollPicker
            data={data}
            onChange={e => {
              onScrollValue(e);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            {/* You can win information */}
            <Text style={styles.infoText}>You can win</Text>
            <Text style={styles.greenText}>$2000</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.infoText}>Total </Text>
            <Coin />
            <Text style={styles.boldText}> 5</Text>
          </View>
        </View>
        <Button
          containerStyle={styles.buttonStyle}
          title={'Submit my prediction'}
          loading={false}
          disabled={false}
          onPress={() => {
            onClose();
          }}
        />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  headingText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    margin: 20,
    color: MyColors.black,
  },
  infoContainer: {
    padding: 20,
  },
  infoText: {
    color: MyColors.secondary,
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
  },
  pickerContainer: {
    height: 120,
    backgroundColor: MyColors.white,
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greenText: {
    color: MyColors.green,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    color: MyColors.secondary,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  buttonStyle: {
    backgroundColor: MyColors.primary,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default PredictionActionSheet;
