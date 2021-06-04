import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import CustomMenu from './custommenu';
import SettingScreen from '../screens/settingscreen';
import MyDonationScreen from '../screens/MyDonationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: AppTabNavigator
    },
    MyDonations:{
        screen: MyDonationScreen
    },
    Settings:{
        screen: SettingScreen
    }
},
{
    contentComponent: CustomMenu
},
{
    initialRouteName: 'Home'
})