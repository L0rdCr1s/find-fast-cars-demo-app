import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Menu</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Menu;