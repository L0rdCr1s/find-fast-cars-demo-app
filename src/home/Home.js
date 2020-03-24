import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentageToDP as heightToDp, widthPercentageToDP as widthToDp,} from 'react-native-responsive-screen';
import Header from "./components/Header";
import TopList from "./components/TopList";
import Recent from "./components/Recent";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header/>
                </View>
                <View style={styles.topList}>
                    <TopList navigation={this.props.navigation}/>
                </View>
                <View style={styles.recentSearch}>
                    <Recent/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1F38'
    },
    header: {
        paddingHorizontal: widthToDp(5),
        paddingTop: heightToDp(6)
    },
    topList: {
        paddingHorizontal: widthToDp(5),
        marginBottom: heightToDp(3)
    },
    recentSearch: {
        paddingHorizontal: widthToDp(5),
    },
});
