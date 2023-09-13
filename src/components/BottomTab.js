import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState, useRef } from 'react';
import { useColorScheme } from 'react-native';
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from "@expo/vector-icons"

import HomePage from '../views/HomePage';
import Chat from '../views/Chat';
import ToolBox from '../views/ToolBox';
import MySchedule from '../views/MySchedule';
import Journal from '../views/Journal';
import { useTheme } from 'react-native-paper';

import { useTranslation } from "react-i18next"

const Tab = createMaterialBottomTabNavigator();


export function BottomTab() {
  const theme = useTheme()
  theme.colors.secondaryContainer = "transparent"
  let colorScheme = useColorScheme()
  var styleSelected = colorScheme == 'light' ? style : styleDark
  var colors = require('../../style/Colors.json')
  const [homeIcon, setHomeIcon] = useState("home")
  const [chatIcon, setChatIcon] = useState("message-text-outline")
  const [toolBoxIcon, setToolBoxIcon] = useState("account-cog-outline")
  const [scheduleIcon, setScheduleIcon] = useState("calendar-month-outline")
  const [journalIcon, setJournalIcon] = useState("notebook-outline")

  const [goUp, setGoUp] = useState(false)

  const {t, i18n} = useTranslation()

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      activeColor='white'
      inactiveColor='white'
      barStyle={{backgroundColor: colors.BaseSlot2}}
    //   sceneContainerStyle={{paddingBottom:10}}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: t('navbar_home'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={homeIcon} color={color} size={26} />
          ),
        }}
        listeners={{
            tabPress: e => {
                setHomeIcon("home")
                setChatIcon("message-text-outline")
                setToolBoxIcon("account-cog-outline")
                setScheduleIcon("calendar-month-outline")
                setJournalIcon("notebook-outline")
                setGoUp(true)
                setTimeout(() => {
                  setGoUp(false)
                }, 250)
            }
        }}
        initialParams={{goUp: goUp}}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: t('navbar_chat'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={chatIcon} color={color} size={26} />
          ),
        }}
        listeners={{
            tabPress: e => {
                setHomeIcon("home-outline")
                setChatIcon("message-text")
                setToolBoxIcon("account-cog-outline")
                setScheduleIcon("calendar-month-outline")
                setJournalIcon("notebook-outline")
            }
        }}
      />
      <Tab.Screen
        name="ToolBox"
        component={ToolBox}
        options={{
          tabBarLabel: t('navbar_toolbox'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={toolBoxIcon} color={color} size={26} />
          ),
        }}
        listeners={{
            tabPress: e => {
                setHomeIcon("home-outline")
                setChatIcon("message-text-outline")
                setToolBoxIcon("account-cog")
                setScheduleIcon("calendar-month-outline")
                setJournalIcon("notebook-outline")
            }
        }}
      />
      <Tab.Screen
        name="MySchedule"
        component={MySchedule}
        options={{
          tabBarLabel: t('navbar_schedule'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={scheduleIcon} color={color} size={26} />
          ),
        }}
        listeners={{
            tabPress: e => {
                setHomeIcon("home-outline")
                setChatIcon("message-text-outline")
                setToolBoxIcon("account-cog-outline")
                setScheduleIcon("calendar-month")
                setJournalIcon("notebook-outline")
            }
        }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarLabel: t('navbar_journal'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={journalIcon} color={color} size={26} />
          ),
        }}
        listeners={{
            tabPress: e => {
                setHomeIcon("home-outline")
                setChatIcon("message-text-outline")
                setToolBoxIcon("account-cog-outline")
                setScheduleIcon("calendar-month-outline")
                setJournalIcon("notebook")
            }
        }}
      />
    </Tab.Navigator>
  );
}