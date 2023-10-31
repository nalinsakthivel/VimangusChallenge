import {Text, View} from 'react-native';
import React from 'react';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import {MyColors} from '../values/MyColor';
import {PickerIOS} from '@react-native-picker/picker';
import {screenWidth} from '../utils/CommonUtils';

// Define the props for the WheelScrollPicker component
interface WheelScrollPickerProps {
  data: any; // Data for the picker
  index?: number; // Optional index to set the initial selection
  onChange: (e: any) => void; // Callback function to handle value changes
}

// WheelScrollPicker component
const WheelScrollPicker = ({data, onChange, index}: WheelScrollPickerProps) => {
  return (
    // <ScrollPicker
    //   dataSource={data} // Data source for the picker
    //   selectedIndex={index || 0} // Initial selected index (default is 0)
    //   renderItem={data => {
    //     return (
    //       <View>
    //         <Text
    //           style={{
    //             color: MyColors.black,
    //             fontSize: 24,
    //             fontFamily: 'Montserrat-Bold',
    //           }}>
    //           {data}
    //         </Text>
    //       </View>
    //     );
    //   }}
    //   onValueChange={data => {
    //     onChange(data); // Call the onChange callback when the value changes
    //   }}
    //   wrapperHeight={100} // Height of the picker wrapper
    //   wrapperWidth={100} // Width of the picker wrapper
    //   itemHeight={50} // Height of each item in the picker
    //   highlightColor={MyColors.mildBlue} // Color of the selection highlight
    //   highlightBorderWidth={2} // Border width of the selection highlight
    // />
    <PickerIOS
      itemStyle={{
        fontSize: 25,
        color: 'red',
        textAlign: 'left',
        fontWeight: 'bold',
      }}
      selectedValue={1}
      selectionColor="rgba(0, 0, 0, 0.3)"
      onValueChange={value => console.log('value :>> ', value)}
      style={{width: screenWidth, height: 100}}>
      {data.map(
        (value: React.Key | null | undefined) => (
          console.log('value :>> ', value),
          (<PickerIOS.Item key={value} value={value} label={value} />)
        ),
      )}
    </PickerIOS>
  );
};

export default WheelScrollPicker;
