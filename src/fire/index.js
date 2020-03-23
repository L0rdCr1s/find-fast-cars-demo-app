import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Fire extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Fire</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Fire;