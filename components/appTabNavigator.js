import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    donateBooks: {
        screen: BookDonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/request-list.png')} style={{width: 20, height: 20}}/>,
            tabBarLabel: 'Donate Books'
        }
    },
    requestBooks: {
        screen: BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/request-book.png')} style={{width: 20, height: 20}}/>,
            tabBarLabel: 'Request Books'
        }
    }
})