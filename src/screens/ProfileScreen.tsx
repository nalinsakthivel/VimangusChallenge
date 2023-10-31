import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyColors} from '../values/MyColor';
import {
  Edit,
  Logo,
  Logout,
  Notification,
  StarCoin,
  ThinDownArrow,
  ThinUpArrow,
} from '../assets/svg';
import {useProfileScreen} from '../hooks/useProfileScreen';
import TabView from '../components/TabView';
import GamesPlayedListView from '../components/ListView/GamesPlayedListView';
import BadgesListView from '../components/ListView/BadgesListView';
import VisibilityContainer from '../components/VisiblityContainer';

const profilePic = require('../assets/images/user.png');

// ProfileScreen component
const ProfileScreen = () => {
  // Fetch necessary data and state using a custom hook
  const {notifiCount, tab, onTabChange} = useProfileScreen();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Logo />
        <Text style={styles.headerText}>Profile</Text>
        <Notification />
        <VisibilityContainer isVisible={notifiCount > 0}>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>1</Text>
          </View>
        </VisibilityContainer>
      </View>
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image source={profilePic} style={styles.profileImage} />
        <TouchableOpacity style={styles.editButton}>
          <Edit />
        </TouchableOpacity>
      </View>
      {/* Profile Information */}
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Jina Simons</Text>
        <Text style={styles.points}>6000 Pts</Text>
        <Text style={styles.bio}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <TouchableOpacity style={styles.logoutButton}>
          <Logout />
          <Text style={styles.logoutButtonText}>{'   '}Logout</Text>
        </TouchableOpacity>
        {/* Statistics */}
        <View style={styles.statsContainer}>
          <StarCoin style={styles.starCoin} />
          <View style={styles.statsContent}>
            {/* Statistic: Under and Over */}
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Under and Over</Text>
              <View style={styles.statItem}>
                <View style={styles.upArrowContainer}>
                  <ThinUpArrow />
                </View>
                <Text style={styles.statValue}> 81%</Text>
              </View>
            </View>
            {/* Statistic: Top 5 */}
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Top 5</Text>
              <View style={styles.statItem}>
                <View style={styles.downArrowContainer}>
                  <ThinDownArrow />
                </View>
                <Text style={styles.statValue}> -51%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Separator */}
      <View style={styles.separator} />
      {/* TabView */}
      <TabView onChange={e => onTabChange(e)} />
      {/* Conditional rendering of content based on selected tab */}
      <VisibilityContainer isVisible={tab === 'Games Played'}>
        <GamesPlayedListView />
      </VisibilityContainer>
      <VisibilityContainer isVisible={tab === 'Badges'}>
        <BadgesListView />
      </VisibilityContainer>
    </SafeAreaView>
  );
};

// Styles using StyleSheet.create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.white,
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    color: MyColors.secondary,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  notificationBadge: {
    backgroundColor: MyColors.primary,
    width: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    height: 15,
    position: 'absolute',
    top: -5,
    right: -5,
  },
  notificationBadgeText: {
    color: MyColors.white,
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  editButton: {
    backgroundColor: MyColors.white,
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 5,
  },
  profileInfo: {
    alignSelf: 'center',
    marginTop: 10,
    padding: 15,
  },
  profileName: {
    color: MyColors.black,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  points: {
    color: MyColors.secondary,
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    marginTop: 10,
  },
  bio: {
    color: MyColors.secondary,
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'left',
    marginTop: 10,
    lineHeight: 20,
  },
  logoutButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    height: 30,
  },
  logoutButtonText: {
    color: MyColors.secondary,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  statsContainer: {
    borderWidth: 1,
    marginTop: 30,
    padding: 15,
    borderColor: MyColors.borGrey,
    borderRadius: 5,
  },
  starCoin: {
    alignSelf: 'center',
    position: 'absolute',
    top: -18,
  },
  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statRow: {
    padding: 15,
    width: '40%',
  },
  statLabel: {
    color: MyColors.secondary,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upArrowContainer: {
    backgroundColor: MyColors.bGGreen,
    width: '25%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 5,
  },
  statValue: {
    color: MyColors.grey,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  downArrowContainer: {
    backgroundColor: MyColors.bgRed,
    width: '25%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 5,
  },
  separator: {
    backgroundColor: MyColors.mildPrimary,
    height: 10,
  },
});

export default ProfileScreen;
