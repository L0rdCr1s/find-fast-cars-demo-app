import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as heightToDp, widthPercentageToDP as widthToDp,} from 'react-native-responsive-screen';
import BrandHeader from "./components/BrandHeader";

const cars = [
    {
        id: '1', component: showCarInfo => (
            <View style={styles.protector}>
                <View style={styles.brandCard}>
                    <Text style={styles.brandCardCarName}>
                        R8 Spyder
                    </Text>
                    <Text style={styles.brandCardText}>
                        2020 - Edition
                    </Text>
                    <Image source={require('./assets/audinotop.png')} style={styles.audinotop}/>
                    <TouchableOpacity style={styles.detailsButton} onPress={showCarInfo}>
                        <Text style={styles.carName}>Available</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
    {
        id: '2', component: showCarInfo => (
            <View style={styles.protector}>
                <View style={styles.brandCard}>
                    <Text style={styles.brandCardCarName}>
                        Audi R8
                    </Text>
                    <Text style={styles.brandCardText}>
                        2019 - Edition
                    </Text>
                    <Image source={require('./assets/audi.png')} style={styles.audi}/>
                    <TouchableOpacity style={styles.detailsButton} onPress={showCarInfo}>
                        <Text style={styles.carName}>Available</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
    {
        id: '3', component: showCarInfo => (
            <View style={styles.protector}>
                <View style={styles.brandCard}>
                    <Text style={styles.brandCardCarName}>
                        Audi TT
                    </Text>
                    <Text style={styles.brandCardText}>
                        2018 - Edition
                    </Text>
                    <Image source={require('./assets/auditt.png')} style={styles.auditt}/>
                    <TouchableOpacity style={styles.detailsButton} onPress={showCarInfo}>
                        <Text style={styles.carName}>Available</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
];

export default class Brand extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    };

    showCarInfo = () => {
        this.props.navigation.navigate("Car");
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/backgrounds.png')} style={styles.background1}/>
                <Image source={require('./assets/backgrounds.png')} style={styles.background2}/>
                <BrandHeader navigation={this.props.navigation}/>
                <View style={styles.carChooser}>
                    <FlatList
                        data={cars}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => item.component(this.showCarInfo)}
                        keyExtractor={subItem => subItem.id}
                        initialScrollIndex={0}
                    />
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
    brandCard: {
        backgroundColor: '#272B50',
        width: widthToDp(42),
        height: heightToDp(34),
        marginRight: widthToDp(5),
        marginTop: heightToDp(3),
        borderRadius: 10,
        justifyContent: 'center',
    },
    audinotop: {
        resizeMode: 'cover',
        height: widthToDp(23),
        width: widthToDp(48),
        position: 'absolute',
        left: widthToDp(-13),
    },
    audi: {
        resizeMode: 'cover',
        height: widthToDp(23),
        width: widthToDp(50),
        position: 'absolute',
        left: widthToDp(-13),
    },
    auditt: {
        resizeMode: 'cover',
        height: widthToDp(25),
        width: widthToDp(50),
        position: 'absolute',
        left: widthToDp(-13),
    },
    carChooser: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: heightToDp(10),
    },
    detailsButton: {
        backgroundColor: '#6912F7',
        width: widthToDp('25'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: heightToDp(1),
        borderRadius: 15,
        position: 'absolute',
        bottom: heightToDp(2),
        alignSelf: 'center'
    },
    carName: {
        fontFamily: 'Nunito-Regular',
        color: '#ced7e2',
        fontSize: heightToDp(2.1)
    },
    brandCardText: {
        color: '#ced7e2',
        fontFamily: 'Nunito-Light',
        fontSize: heightToDp(1.5),
        marginHorizontal: widthToDp(1),
        position: 'absolute',
        top: heightToDp(6),
        alignSelf: 'center',
    },
    brandCardCarName: {
        color: '#ced7e2',
        fontFamily: 'Nunito-Regular',
        fontSize: heightToDp(2.9),
        marginHorizontal: widthToDp(1),
        position: 'absolute',
        top: heightToDp(2),
        alignSelf: 'center',
    },
    protector: {
        backgroundColor: 'transparent',
        width: widthToDp(60),
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
});
