import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
    heightPercentageToDP as heightToDp,
    widthPercentageToDP as widthToDp,
} from 'react-native-responsive-screen';
import {Octicons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import BrandHeader from "./components/BrandHeader";

export default class Brand extends Component {

    goBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/backgrounds.png')} style={styles.background1} />
                <Image source={require('./assets/backgrounds.png')} style={styles.background2} />
                <BrandHeader />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1F38'
    },
    background1: {
        position: 'absolute',
        width: widthToDp(100),
        height: heightToDp(30),
        resizeMode: 'cover',
        top: heightToDp(8)
    },
    background2: {
        position: 'absolute',
        width: widthToDp(100),
        height: heightToDp(30),
        resizeMode: 'cover',
        top: heightToDp(6.3)
    },
});
