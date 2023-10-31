import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {MyColors} from '../values/MyColor';

// Define the props for the WheelScrollPicker component
interface WheelScrollPickerProps {
  data: any[]; // Data for the picker
  index?: number; // Optional index to set the initial selectionf
  onChange: (e: any) => void; // Callback function to handle value changes
}

// WheelScrollPicker component
const WheelScrollPicker = ({data, onChange, index}: WheelScrollPickerProps) => {
  const [currentInxed, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const heightOfItem = 35;

  useEffect(() => {
    if (index) {
      scrollViewRef?.current?.scrollTo({
        y: index * heightOfItem,
        animated: true,
      });
    }
  }, [heightOfItem, index]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    const indx = Math.floor(y / heightOfItem);
    setCurrentIndex(indx);
  };

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    const indx = Math.floor(y / heightOfItem);
    onChange(data[indx]);
    scrollViewRef?.current?.scrollTo({y: indx * heightOfItem, animated: true});

    setTimeout(() => {
      setCurrentIndex(indx);
    }, 300);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 24}}>
      <View
        style={{
          backgroundColor: MyColors.mildPrimary,
          width: '100%',
          height: heightOfItem,
          position: 'absolute',
          marginTop: 50 - heightOfItem / 2,
          alignItems: 'center',
          marginBottom: 50 + heightOfItem / 2,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          marginTop: 35,
          zIndex: 1000,
        }}
        showsVerticalScrollIndicator={false}
        onScrollEndDrag={onScrollEnd}
        onScroll={onScroll}
        ref={scrollViewRef}>
        {data.map((value, indx) => {
          const defaultOpacity = 1;
          const opacity =
            indx === currentInxed
              ? defaultOpacity
              : defaultOpacity - Math.abs(currentInxed - indx) * 0.2;
          return (
            <Text
              style={{
                height: heightOfItem,
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 24,
                fontFamily: 'Montserrat-Bold',
                opacity,
                color: MyColors.black,
              }}>
              {value}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default WheelScrollPicker;
