import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './home/index';
import Fire from './fire/index';
import {heightPercentageToDP as heightToDp} from 'react-native-responsive-screen';
import {StyleSheet, View} from 'react-native';
import {EvilIcons, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#E5E8F7',
                inactiveTintColor: '#6912F7',
                showLabel: false,
                style: {
                    height: heightToDp('9'),
                    backgroundColor: '#272B50',
                },
                tabStyle: {backgroundColor: '#272B50', bottom: 2,},
                keyboardHidesTabBar: true,
            }}
            backBehavior="history">
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarAccessibilityLabel: 'Search',
                    tabBarIcon: ({color, focused}) => {
                        if (focused) {
                            return (
                                <View style={localStyles.activeHomeIcon}>
                                    <SimpleLineIcons name="home" color={color} size={20}/>
                                </View>
                            );
                        } else {
                            return (
                                <SimpleLineIcons name="home" color={color} size={20}/>
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name="Fire"
                component={HomeNavigator}
                options={{
                    tabBarAccessibilityLabel: 'Fire',
                    tabBarIcon: ({color, focused}) => {
                        if (focused) {
                            return (
                                <View style={localStyles.activeFireIcon}>
                                    <SimpleLineIcons name="fire" color={color} size={20}/>
                                </View>
                            );
                        } else {
                            return (
                                <SimpleLineIcons name="fire" color={color} size={20}/>
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name="UserProfile"
                component={HomeNavigator}
                options={{
                    tabBarAccessibilityLabel: 'Search',
                    tabBarIcon: ({color, focused}) => {
                        if (focused) {
                            return (
                                <View style={localStyles.activeUserIcon}>
                                    <EvilIcons name="user" color={color} size={30}/>
                                </View>
                            );
                        } else {
                            return (
                                <EvilIcons name="user" color={color} size={30}/>
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name="Menu"
                component={HomeNavigator}
                options={{
                    tabBarAccessibilityLabel: 'Search',
                    tabBarIcon: ({color, focused}) => {
                        if (focused) {
                            return (
                                <View style={localStyles.activeMenuIcon}>
                                    <MaterialIcons name="menu" color={color} size={20}/>
                                </View>
                            );
                        } else {
                            return (
                                <MaterialIcons name="menu" color={color} size={20}/>
                            );
                        }
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigator;

const localStyles = StyleSheet.create({
    // bottomNavigatorStyle: {
    //     backgroundColor: '#272B50',
    //     borderTopEndRadius: 10,
    // },
    activeHomeIcon: {
        backgroundColor: '#6912F7',
        padding: 12,
        borderRadius: 15,
        elevation: 2,
    },
    activeFireIcon: {
        backgroundColor: '#6912F7',
        padding: 12,
        borderRadius: 15,
        elevation: 2,
    },
    activeUserIcon: {
        backgroundColor: '#6912F7',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 15,
        elevation: 2,
    },
    activeMenuIcon: {
        backgroundColor: '#6912F7',
        padding: 12,
        borderRadius: 15,
        elevation: 2,
    }
});