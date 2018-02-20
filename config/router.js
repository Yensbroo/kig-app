import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../screens/Login';
import Feed from '../screens/Home';
import Friends from '../screens/Friends';
import Rewards from '../screens/Rewards';
import ChallengeDetail from '../screens/ChallengeDetail';

export const FeedStack = StackNavigator({
    Home: {
        screen: Feed,
        navigationOptions: {
            headerMode: 'screen'
        },
    },
    ChallengeDetails: {
        screen: ChallengeDetail,
        navigationOptions: ({ navigation }) => ({
            
        })
    }
})

export const Tabs = TabNavigator({
    Home: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => <Icon name="home" size={25} color={tintColor}/>,
        }
    },
    Friends: {
        screen: Friends,
        navigationOptions: {
            tabBarLabel: 'Friends',
            tabBarIcon: ({ tintColor }) => <Icon name="users" size={25} color={tintColor}/>
        }
    },
    Rewards: {
        screen: Rewards,
        navigationOptions: {
            tabBarLabel: 'Rewards',
            tabBarIcon: ({ tintColor }) => <Icon name="trophy" size={25} color={tintColor}/>,
        },
        
    },
});

export const Root = StackNavigator ({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            headerTitle: 'KIG',
            headerMode: 'none',
            headerLeft: null,
            gesturesEnabled: false
        }
    }
})