import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as heightToDp, widthPercentageToDP as widthToDp,} from 'react-native-responsive-screen';
import {FontAwesome, Octicons} from '@expo/vector-icons';

export default class TopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [
                {id: '1', carCount: 157, logo: require('./assets/bmw.png')},
                {id: '2', carCount: 37, logo: require('./assets/lambo.png')},
                {id: '3', carCount: 54, logo: require('./assets/ferari.png')},
                {id: '7', carCount: 10, logo: require('./assets/bugatti.png')},
                {id: '4', carCount: 867, logo: require('./assets/chevrolet.png')},
                {id: '5', carCount: 143, logo: require('./assets/porsche.jpg')},
                {id: '6', carCount: 456, logo: require('./assets/nissan.png')},
                {id: '9', carCount: 987, logo: require('./assets/toyota.png')},
            ]
        }
    }

    navigateToBrand = () => {
        this.props.navigation.navigate('Brand');
    };

    render() {
        return (
            <React.Fragment>
                <Text style={styles.heading}>Top List</Text>
                <FlatList
                    data={this.state.brands}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={this.navigateToBrand}>
                            <View style={styles.brandCard}>
                                <Image source={item.logo} style={styles.logo}/>
                                <View style={styles.carCountContainer}>
                                    <Octicons name="primitive-dot" size={20} color="#6912F7"/>
                                    <Text style={styles.brandCardText}>
                                        {item.carCount} Cars
                                    </Text>
                                </View>
                                <View style={styles.featuredStar}>
                                    <FontAwesome name="star" size={10} color="#F9AD32"/>
                                    <Text style={styles.brandFeaturedText}>
                                        Featured
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
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
        fontSize: heightToDp(3)
    },
    brandCard: {
        backgroundColor: '#272B50',
        width: widthToDp(32),
        height: heightToDp(22),
        marginRight: widthToDp(5),
        marginTop: heightToDp(3),
        borderRadius: 10,
        justifyContent: 'center'
    },
    logo: {
        resizeMode: 'center',
        height: widthToDp(23),
        width: widthToDp(17),
        alignSelf: 'center',
    },
    brandCardText: {
        color: '#7275a4',
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
    featuredStar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: heightToDp(5),
        position: 'absolute',
        top: heightToDp(-4),
        left: widthToDp(2)
    },
    brandFeaturedText: {
        color: '#7275a4',
        fontFamily: 'Nunito-Regular',
        fontSize: heightToDp(1.5),
        marginHorizontal: widthToDp(1.4),
    }
});
