import React from 'react';
import {Image, Pressable, View} from 'react-native';

import {IcDashboardOff, IcDashboardOn, IcListOff, IcListOn} from '~assets';
import {black, moderateScale} from '~common';

export const ButtonTabNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const source = route => {
          switch (route) {
            case 'Dashboard':
              return {
                image: isFocused ? IcDashboardOn : IcDashboardOff,
                alignItems: 'flex-start',
                paddingLeft: moderateScale(54),
              };
            case 'List':
              return {
                image: isFocused ? IcListOn : IcListOff,
                alignItems: 'flex-end',
                paddingRight: moderateScale(54),
              };
            default:
              return {};
          }
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: black,
              alignItems: source(route.name).alignItems,
              justifyContent: 'center',
              height: moderateScale(60),
              paddingLeft: source(route.name).paddingLeft ?? 0,
              paddingRight: source(route.name).paddingRight ?? 0,
            }}>
            <Image
              source={source(route.name).image}
              style={{width: '20%', height: '100%', resizeMode: 'contain'}}
            />
          </Pressable>
        );
      })}
    </View>
  );
};
