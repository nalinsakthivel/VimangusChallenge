import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import data from '../../values/BadgesCard.json';
import {MyColors} from '../../values/MyColor';
import BadgeCard from '../Card/BadgeCard';

const BadgesListView = () => {
  return (
    <FlatList
      style={styles.container} // Applied a style for the container
      data={data.badges}
      renderItem={({item}) => (
        <BadgeCard
          title={item.title}
          subTitle={item.subTitile}
          bonus={item.bonus}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyColors.mildPrimary,
  },
});

export default BadgesListView;
