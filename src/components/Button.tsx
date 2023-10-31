import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import React from 'react';
import {MyColors} from '../values/MyColor';

// Define the props for the Button component
interface ButtonProps {
  containerStyle: StyleProp<ViewStyle>; // Style for the button container
  title: string; // Text to display on the button
  titleStyle?: StyleProp<TextStyle>; // Style for the button text
  loading: boolean; // Indicates whether the button is in a loading state
  disabled: boolean; // Indicates whether the button is disabled
  onPress: () => void; // Callback function for button press
  Icon?: JSX.Element; // Optional JSX element for an icon
}

// Button component
const Button: React.FC<ButtonProps> = ({
  containerStyle,
  disabled,
  loading,
  titleStyle,
  title,
  Icon,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, containerStyle]}
      disabled={disabled}
      onPress={() => {
        onPress();
      }}>
      {loading ? (
        // Display an ActivityIndicator if the button is in loading state
        <ActivityIndicator color={MyColors.white} size={'small'} />
      ) : (
        <View style={styles.iconTextContainer}>
          {Icon ? Icon : null}
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  mainContainer: {
    height: 40,
    width: '45%',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: MyColors.white,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '45%',
  },
});
