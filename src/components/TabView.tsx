import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MyColors} from '../values/MyColor';

interface TabViewProps {
  onChange: (e: any) => void;
}

const TabView = ({onChange}: TabViewProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs = ['Games Played', 'Badges'];

  const handleTabPress = (index: React.SetStateAction<number>, tab: string) => {
    setActiveTab(index);
    onChange(tab);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: MyColors.white,
      }}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTabPress(index, tab)}
          style={{
            padding: 10,
            borderBottomWidth: 2,
            width: '50%',
            alignItems: 'center',
            height: 60,
            justifyContent: 'center',
            borderColor:
              index === activeTab ? MyColors.primary : MyColors.white,
          }}>
          <Text
            style={{
              color:
                index === activeTab ? MyColors.primary : MyColors.secondary,
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabView;
