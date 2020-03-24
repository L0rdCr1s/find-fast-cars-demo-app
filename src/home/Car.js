import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as heightToDp, widthPercentageToDP as widthToDp,} from 'react-native-responsive-screen';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

export default class Car extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/backgrounds.png')} style={styles.background1}/>
                <Image source={require('./assets/backgrounds.png')} style={styles.background2}/>
                <View style={styles.header}>
                    <Image source={require('./assets/audi.png')} style={styles.audi}/>
                </View>
                <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
                    <Ionicons name="ios-arrow-round-back" color="#E5E8F7" size={40}/>
                </TouchableOpacity>
                <View style={styles.carChooser}>
                    <Text style={styles.heading}>Audi R8</Text>
                    <Text style={styles.brandCardText}>
                        2019 - Edition
                    </Text>
                    <View style={styles.features}>
                        <View>
                            <MaterialCommunityIcons name="speedometer" color="#6912F7" size={34}/>
                            <Text style={styles.value}>
                                0-60
                            </Text>
                            <Text style={styles.time}>3.56</Text>
                        </View>
                        <View>
                            <MaterialCommunityIcons name="steering" color="#6912F7" size={34}/>
                            <Text style={styles.value}>
                                Capacity
                            </Text>
                            <Text style={styles.time}>Auto</Text>
                        </View>
                        <View>
                            <MaterialCommunityIcons name="angular" color="#6912F7" size={34}/>
                            <Text style={styles.value}>
                                Transmission
                            </Text>
                            <Text style={styles.time}>Auto</Text>
                        </View>
                        <View>
                            <Image source={require('./assets/tyre.jpg')} style={styles.audiTyre}/>
                        </View>
                        <View>
                            <Image source={require('./assets/steer.jpg')} style={styles.audiTyre}/>
                        </View>
                    </View>
                    <View style={styles.paragraphContainer}>
                        <Text style={styles.paragraph}>
                            In efforts to expand our horizons, welcome every investment-minded individual
                            to join us in the Condotel Investment Opportunity
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <View>
                            <Text style={styles.value}>
                                Price
                            </Text>
                            <Text style={styles.time}>$35000</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.detailsButton}>
                                <Text style={styles.carName}>Available</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        backgroundColor: '#272B50',
        paddingHorizontal: widthToDp(5),
        paddingTop: heightToDp(6)
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
    audi: {
        resizeMode: 'cover',
        height: widthToDp(32),
        width: widthToDp(70),
        right: widthToDp(-38),
    },
    audiTyre: {
        resizeMode: 'cover',
        height: widthToDp(17),
        width: widthToDp(17),
    },
    carChooser: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: heightToDp(13),
        paddingHorizontal: widthToDp(5)
    },
    detailsButton: {
        backgroundColor: '#6912F7',
        width: widthToDp('25'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: heightToDp(1),
        borderRadius: 15,
    },
    carName: {
        fontFamily: 'Nunito-Regular',
        color: '#ced7e2',
        fontSize: heightToDp(2.1)
    },
    brandCardText: {
        color: '#ced7e2',
        fontFamily: 'Nunito-Light',
        fontSize: heightToDp(2.3),
        marginHorizontal: widthToDp(1),
        marginBottom: heightToDp(3)
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
    backButton: {
        position: 'absolute',
        left: widthToDp(-5),
        paddingVertical: heightToDp('2'),
        paddingHorizontal: widthToDp(10),
        top: heightToDp(3)
    },
    heading: {
        fontFamily: 'Nunito-Regular',
        color: '#E5E8F7',
        fontSize: heightToDp(5)
    },
    value: {
        color: '#ced7e2',
        fontFamily: 'Nunito-Light',
        fontSize: heightToDp(1.6),
        marginHorizontal: widthToDp(1),
        marginVertical: heightToDp(0.8)
    },
    time: {
        color: '#ced7e2',
        fontFamily: 'Nunito-Regular',
        fontSize: heightToDp(2.7),
        marginHorizontal: widthToDp(1),
    },
    features: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    paragraph: {
        color: '#ced7e2',
        fontFamily: 'Nunito-Light',
        fontSize: heightToDp(2.3),
        marginHorizontal: widthToDp(1),
        marginVertical: heightToDp(0.8)
    },
    paragraphContainer: {
        paddingVertical: heightToDp(2),
        borderBottomWidth: 1,
        borderBottomColor: '#6912F7'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: widthToDp(2),
        alignItems: 'center',
        flex: 1,
    },
});
