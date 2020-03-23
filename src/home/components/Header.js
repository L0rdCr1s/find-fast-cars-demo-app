import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {
    heightPercentageToDP as heightToDp,
    widthPercentageToDP as widthToDp,
} from 'react-native-responsive-screen';
import {Octicons} from '@expo/vector-icons';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Text style={styles.heading}>Find Car</Text>
                <View style={styles.searchContainer}>
                    <Octicons name="search" color="#424568" size={17} style={styles.searchIcon} />
                    <TextInput
                        placeholderTextColor="#424568"
                        placeholder="search car"
                        style={styles.searchBar}/>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Nunito-Regular',
        color: '#E5E8F7',
        fontSize: heightToDp(5)
    },
    searchBar: {
        flex: 1,
        paddingVertical: heightToDp(.8),
        fontSize: heightToDp(2.2)
    },
    searchContainer: {
        backgroundColor: '#272B50',
        borderRadius: 14,
        marginVertical: heightToDp(3),
        flexDirection: 'row',
        paddingHorizontal: widthToDp(3),
        paddingVertical: heightToDp(0.6),
        alignItems: 'center'
    },
    searchIcon: {
        paddingRight: widthToDp(3.5),
        borderRightWidth: 2,
        borderRightColor: '#424568',
        marginRight: widthToDp(3),
        paddingVertical: heightToDp(.5)
    }
});
