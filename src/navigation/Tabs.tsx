import React, { FC } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Screens } from './types';

import {
  HomeScreen,
  FriendsScreen,
  ProfileScreen,
  QuestionsScreen,
} from '../screens';
import { QuestionsIcon, HomeIcon, FriendsIcon, ProfileIcon } from '../legos';
import { theme } from '../utils';
import TabBar from './TabBar';
import { ScreenProps } from '../screens/types';

type IconTabsProps = {
  focused?: boolean;
  color?: string;
  size?: number;
};

export type TabsProps = {
  name: string;
  label: string;
  component: FC<ScreenProps>;
  tabBarIcon: any;
};

const tabs: TabsProps[] = [
  {
    name: Screens.Home,
    label: 'Home',
    component: HomeScreen,
    tabBarIcon: ({ size, focused }: IconTabsProps) => (
      <HomeIcon
        color={focused ? theme.colors.mainBlue : theme.colors.grayDark}
        size={size}
      />
    ),
  },
  {
    name: Screens.Questions,
    label: 'Questions',
    component: QuestionsScreen,
    tabBarIcon: ({ size, focused }: IconTabsProps) => (
      <QuestionsIcon
        color={focused ? theme.colors.mainBlue : theme.colors.grayDark}
        size={size}
      />
    ),
  },
  {
    name: Screens.Friends,
    label: 'Friends',
    component: FriendsScreen,
    tabBarIcon: ({ size, focused }: IconTabsProps) => (
      <FriendsIcon
        color={focused ? theme.colors.mainBlue : theme.colors.grayDark}
        size={size}
      />
    ),
  },
  {
    name: Screens.Profile,
    label: 'Profile',
    component: ProfileScreen,
    tabBarIcon: ({ size, focused }: IconTabsProps) => (
      <ProfileIcon
        color={focused ? theme.colors.mainBlue : theme.colors.grayDark}
        size={size}
      />
    ),
  },
];

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const screenOptions = (): BottomTabNavigationOptions => {
    return {
      title: 'My home',
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        paddingTop: 15,
        top: 0,
        backgroundColor: '#f7f7f7',
        height: 80,
      },

      tabBarItemStyle: {
        borderRadius: 10,
      },
    };
  };

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <TabBar {...props} tabs={tabs} />}>
      {tabs.map(({ name, component, label }, index) => {
        return (
          <Tab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              tabBarLabel: label,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
