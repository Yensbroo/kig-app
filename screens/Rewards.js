import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { challenges } from '../config/challenges';

class Feed extends Component {
    render() {
        return (
            <ScrollView>
                <Text>Rewards</Text>
            </ScrollView>
        )
    }
}

export default Feed;