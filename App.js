import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // check if fonts are already loaded
      isFontLoaded: false,
    }
  }

  async componentDidMount() {
    /**Loading application custom fonts */
    await Font.loadAsync({
      'Nunito-Bold': require('./assets/fonts/nunito/Nunito-Bold.ttf'),
      'Nunito-Light': require('./assets/fonts/nunito/Nunito-Light.ttf'),
      'Nunito-Regular': require('./assets/fonts/nunito/Nunito-Regular.ttf'),
    });

    // when fonts are loaded update state
    this.setState({isFontLoaded: true});
  }

  render() {
    return (
        <View style={styles.container}>
          {
            this.state.isFontLoaded ? (
                <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 56 }}>
                  Find Car
                </Text>
            ) : null
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
