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
import { Button } from '../components/Button';

class ChallengeDetail extends Component {

      render() {
        const { title, descr, coins } = this.props.navigation.state.params;
        return (
            <Card
                  title={null}
                  containerStyle={styles.card}
                >
                <TouchableOpacity>
                <Text style={styles.titleText}>FairTrade</Text>
                <Text style={styles.descText}>Koop een maand lang duurzame producten en merken.</Text>
                <View style={styles.coinContainer}>
                <Image source={require("../assets/img/coin.png")} />
                <Text style={styles.coinText}>15</Text>
                <Button style={styles.button}>Accept this challenge</Button>
                </View>
                </TouchableOpacity>
                </Card>
        )
      }
}

const styles = StyleSheet.create({
    card: {
        height: 350,
        marginBottom: 10,
    },
    titleText: {
        fontSize: 34,
        marginTop: 40,
        color: '#60D5C7',
    },
    descText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18
    },
    coinText: {
        color: '#EAE466',
        fontSize: 18,

    },
    coinContainer: {
        marginBottom: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        backgroundColor: '#60D5C7',
        marginTop: 40
    }
})



export default ChallengeDetail;