import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';

import { TabsProps } from './Tabs';
import {
  AnimatedView,
  AnimatedWrapper,
  Container,
  InnerView,
} from './TabBarStyles';
import { theme } from '../utils';

const windowWidth = Dimensions.get('window').width;

const TAB_BAR_WIDTH = windowWidth / 4;

type Props = BottomTabBarProps & {
  tabs: TabsProps[];
};

const TabBar = ({ state, descriptors, navigation, tabs }: Props) => {
  const animationHorizontalValue = useRef(new Animated.Value(0)).current;

  const animate = useCallback(
    (index: any) => {
      Animated.spring(animationHorizontalValue, {
        toValue: index * TAB_BAR_WIDTH,
        useNativeDriver: true,
      }).start();
    },
    [animationHorizontalValue],
  );

  useEffect(() => {
    animate(state.index);
  }, [animate, state.index]);

  return (
    <Container>
      <AnimatedWrapper>
        <AnimatedView
          style={[
            {
              transform: [{ translateX: animationHorizontalValue }],
            },
          ]}
        />
      </AnimatedWrapper>

      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const renderIcon = tabs[index]?.tabBarIcon;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={`${index}--${route.key}`}>
              <InnerView>
                {renderIcon({
                  color: theme.colors.black,
                  size: 25,
                  focused: isFocused,
                })}
              </InnerView>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </Container>
  );
};

export default TabBar;
