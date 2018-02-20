import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    ListView,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Head from '../components/header';
import { friends } from '../config/friends';

class Friends extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
          isLoading: true,
          data: friends

        }
      }
    render() {
        return (
            <ScrollView>
                <List>
                   {friends.map((friend) =>(
                       <ListItem 
                       key={friend.name}
                       roundAvatar
                       avatar={friend.avatar}
                       title={friend.name}
                       />
                   ))}
                </List>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Friends;