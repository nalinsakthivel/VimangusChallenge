import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MyColors} from '../../values/MyColor';
import {CardPlaceholder} from '../../assets/svg';

interface BadgeCardProps {
  title: string;
  subTitle: string; // Corrected the typo in the interface
  bonus?: string;
}

const BadgeCard = ({subTitle, title, bonus}: BadgeCardProps) => {
  return (
    <View style={styles.container}>
      <CardPlaceholder />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {bonus ? <Text style={styles.bonusText}> x {bonus}</Text> : null}
        </View>
        <Text style={styles.subTitleText}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: MyColors.white,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 15,
  },
  content: {
    width: '80%',
    marginLeft: 15,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  titleText: {
    color: MyColors.black,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  bonusText: {
    color: MyColors.goldText,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  subTitleText: {
    color: MyColors.secondary,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 10,
  },
});

export default BadgeCard;
