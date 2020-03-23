import React, {Component} from 'react';
import * as Font from 'expo-font';
import BottomNavigator from "./src";
import { NavigationContainer } from '@react-navigation/native';

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
        <NavigationContainer>
          <BottomNavigator/>
        </NavigationContainer>
    );
  }
}
