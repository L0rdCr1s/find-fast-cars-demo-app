import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {
    heightPercentageToDP as heightToDp,
    widthPercentageToDP as widthToDp,
} from 'react-native-responsive-screen';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {id: '1', name: 'Lamborghini Aventador', price: "$2.5 M", image: require('./assets/lamborghini.png')},
                {id: '2', name: 'Dodge Challenger SRT', price: "$35000", image: require('./assets/blackhellcat.png')},
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <Text style={styles.heading}>Recent Search</Text>
                <FlatList
                    data={this.state.cars}
                    renderItem={({item}) => (
                        <View style={styles.brandCard}>
                            <Image source={item.image} style={styles.logo}/>
                            <View>
                                <Text style={styles.carName}>{item.name}</Text>
                                <Text style={styles.carName}>{item.price}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={subItem => subItem.id}
                />
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Nunito-Regular',
        color: '#ced7e2',
        fontSize: heightToDp(2.9)
    },
    brandCard: {
        backgroundColor: '#272B50',
        width: widthToDp(90),
        height: heightToDp(10),
        marginRight: widthToDp(5),
        marginTop: heightToDp(3),
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: widthToDp(3)
    },
    logo: {
        resizeMode: 'center',
        height: widthToDp(19),
        width: widthToDp(25),
        alignSelf: 'center',
    },
    carName: {
        fontFamily: 'Nunito-Light',
        color: '#ced7e2',
        fontSize: heightToDp(2.1),
        marginLeft: widthToDp(4),
        marginVertical: heightToDp(0.2)
    }
});
