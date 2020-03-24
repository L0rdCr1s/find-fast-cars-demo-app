import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as heightToDp, widthPercentageToDP as widthToDp,} from 'react-native-responsive-screen';
import {Ionicons, Octicons} from '@expo/vector-icons';

export default class Brand extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.backSearchContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
                        <Ionicons name="ios-arrow-round-back" color="#E5E8F7" size={40}/>
                    </TouchableOpacity>
                    <Octicons name="search" color="#E5E8F7" size={20} style={styles.searchIcon}/>
                </View>
                <View style={styles.carTopInfoContainer}>
                    <Text style={styles.carName}>Available</Text>
                    <View style={styles.carCountContainer}>
                        <Octicons name="primitive-dot" size={20} color="#6912F7"/>
                        <Text style={styles.brandCardText}>
                            196 Cars
                        </Text>
                    </View>
                </View>
                <Text style={styles.heading}>Audi Cars</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#272B50',
        paddingHorizontal: widthToDp(5),
        paddingTop: heightToDp(6)
    },
    heading: {
        fontFamily: 'Nunito-Regular',
        color: '#ced7e2',
        fontSize: heightToDp(4.5),
        marginTop: heightToDp(1)
    },
    backSearchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    searchIcon: {
        marginRight: widthToDp(3)
    },
    carName: {
        fontFamily: 'Nunito-Light',
        color: '#ced7e2',
        fontSize: heightToDp(2.1)
    },
    carTopInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: heightToDp(5)
    },
    brandCardText: {
        color: '#ced7e2',
        fontFamily: 'Nunito-Regular',
        fontSize: heightToDp(1.5),
        marginHorizontal: widthToDp(1),
    },
    carCountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: heightToDp(5),
        position: 'absolute',
        bottom: heightToDp(0.6),
        right: widthToDp(2)
    },
    backButton: {
        position: 'absolute',
        left: widthToDp(-10),
        paddingVertical: heightToDp('2'),
        paddingHorizontal: widthToDp(10),
    }
});
