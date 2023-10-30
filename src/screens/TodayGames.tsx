import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MyColors} from '../values/MyColor';
import {screenWidth} from '../utils/CommonUtils';
import {
  Bitcoin,
  Clock,
  Coin,
  DownArrow,
  Eclipse,
  Info,
  UpArrow,
  User,
} from '../assets/svg';
import Button from '../components/Button';
import MultiProgressBar from '../components/ProgressBar';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationParamList} from '../routes/NavigationUtils';
import {useTodayGames} from '../hooks/useTodayGames';

export type TodayGamesProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, 'TodayGames'>;
  route: RouteProp<NavigationParamList, 'TodayGames'>;
};

const TodayGames: React.FC<TodayGamesProps> = (props: TodayGamesProps) => {
  const {onUpPress, onDownPress} = useTodayGames(props);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Heading */}
      <Text style={styles.headingText}>Today's Games</Text>
      <View style={styles.cardContianer}>
        <View style={styles.topContainer}>
          <View style={styles.infoTimeContainer}>
            <View style={styles.infoContainer}>
              {/* UNDER OR OVER text */}
              <Text style={styles.infoText}>UNDER OR OVER</Text>
              {/* Info icon */}
              <Info />
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>Starting in</Text>
              {/* Clock icon */}
              <Clock />
              <Text style={styles.timerText}>03:23:12</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceHeadingText}>
              Bitcoin price will be under
            </Text>
            <Text style={styles.priceText}>
              $24,524
              <Text style={styles.priceTextAddons}>
                {' '}
                at 7 a ET on 22nd Jan’21
              </Text>
            </Text>
          </View>
          <View style={styles.bitcoinContainer}>
            {/* Eclipse icon */}
            <Eclipse />
          </View>
          <View style={styles.bitcoinContainer}>
            {/* Bitcoin icon */}
            <Bitcoin />
          </View>
        </View>
        <View style={styles.overAllbottomContainer}>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.prizePoolHeader}>PRIZE POOL</Text>
              <Text style={styles.prizePoolText}>$ 12,000</Text>
            </View>
            <View>
              <Text style={styles.prizePoolHeader}>UNDER</Text>
              <Text style={styles.prizePoolText}>3.25x</Text>
            </View>
            <View>
              <Text style={styles.prizePoolHeader}>OVER</Text>
              <Text style={styles.prizePoolText}>1.25x</Text>
            </View>
            <View>
              <Text style={styles.prizePoolHeader}>ENTRY FEES</Text>
              <View style={styles.entryFeesConainter}>
                <Text style={styles.prizePoolText}>5{'  '}</Text>
                <Coin />
              </View>
            </View>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>What's your Prediction?</Text>
            <View style={styles.quesBtnContainer}>
              {/* Under button */}
              <Button
                containerStyle={{backgroundColor: MyColors.button}}
                title={'Under'}
                loading={false}
                disabled={false}
                onPress={() => {
                  onDownPress();
                }}
                Icon={<DownArrow />}
              />
              {/* Over button */}
              <Button
                containerStyle={{backgroundColor: MyColors.primary}}
                title={'Over'}
                loading={false}
                disabled={false}
                onPress={() => {
                  onUpPress();
                }}
                Icon={<UpArrow />}
              />
            </View>
          </View>
          <View style={styles.chartContainer}>
            <View style={styles.detailsContainer}>
              <View style={styles.detailsIcon}>
                <User />
                <Text style={styles.detailsText}>355 Players</Text>
              </View>
              <View style={styles.detailsIcon}>
                <User />
                <Text style={styles.detailsText}>View Chart</Text>
              </View>
            </View>
            <View style={styles.progressBarcontainer}>
              {/* Progress bar */}
              <MultiProgressBar failureCount={30} successCount={70} />
            </View>
            <View style={styles.predictionContainer}>
              <Text style={styles.predictionText}>232 predicted under</Text>
              <Text style={styles.predictionText}>123 predicted over</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TodayGames;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: MyColors.white,
  },
  headingText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    margin: 20,
    color: MyColors.black,
  },
  cardContianer: {
    width: screenWidth * 0.87,
    alignSelf: 'center',
  },
  topContainer: {
    backgroundColor: MyColors.primary,
    width: '100%',
    height: 100,
    padding: 15,
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  infoContainer: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
    width: '38%',
    justifyContent: 'space-around',
  },
  infoTimeContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  timeContainer: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
    width: '45%',
    justifyContent: 'space-around',
  },
  timeText: {fontSize: 12, fontFamily: 'Montserrat-Thin'},
  timerText: {fontSize: 14, fontFamily: 'Montserrat-Regular'},
  priceContainer: {marginLeft: 5, width: '70%'},
  priceHeadingText: {fontSize: 14, fontFamily: 'Montserrat-Regular'},
  priceText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: MyColors.white,
  },
  priceTextAddons: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '600',
  },
  bitcoinContainer: {position: 'absolute', bottom: 0, right: 0},
  bottomContainer: {
    backgroundColor: MyColors.white,
    width: '100%',
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  prizePoolHeader: {
    color: MyColors.mildBlue,
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  prizePoolText: {
    fontSize: 14,
    color: MyColors.black,
    fontFamily: 'Montserrat-SemiBold',
  },
  entryFeesConainter: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 20,
    alignItems: 'center',
  },
  quesBtnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  questionText: {
    color: MyColors.secondary,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  questionContainer: {
    backgroundColor: MyColors.white,
    width: '100%',
    padding: 15,
    justifyContent: 'space-between',
  },
  chartContainer: {backgroundColor: MyColors.lightGrey, padding: 15},
  detailsContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  detailsIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '33%',
  },
  detailsText: {
    color: MyColors.secondary,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  progressBarcontainer: {paddingHorizontal: 5},
  predictionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  predictionText: {
    color: MyColors.teritaryText,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  overAllbottomContainer: {
    backgroundColor: MyColors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
