import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class UserProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>User Profile</Text>
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
export default UserProfile;