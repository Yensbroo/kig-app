import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    ListView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import { challenges } from '../config/challenges';
import ProgressBar from '../components/progressBar';
import { rewards } from '../config/rewards';

class Rewards extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
          isLoading: true,
          data: rewards
        }
      }

      
    
      componentDidMount() {
        var self = this;
        setTimeout(function () {
            self.setState({ isLoading: false });
        }, 1);
      }
      render() {
        return (
            this.state.isLoading ? 
            <View>
                <ProgressBar/>
            </View> :
          <View> 
          <FlatList 
            data={this.state.data}
            renderItem={({ item: rowData }) =>{
              return(
                <Card
                  title={null}
                  containerStyle={styles.card}
                >
                <TouchableOpacity>
                <Text style={styles.titleText}>{rowData.title}</Text>
                <View style={styles.coinContainer}>
                <Image source={require("../assets/img/coin.png")} />
                <Text style={styles.coinText}>{rowData.coins}</Text>
                </View>
                </TouchableOpacity>
                </Card>
              )
            }}
            keyExtractor={(item, index) => index}
          />
          </View>
        )
      }
}

const styles = StyleSheet.create({
    card: {
        height: 180,
        marginBottom: 10,
    },
    titleText: {
        fontSize: 18,
        marginTop: 20,
        color: '#60D5C7',
    },
    coinText: {
        color: '#EAE466',
        fontSize: 18,

    },
    coinContainer: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        }
})



export default Rewards;