import React, { Component } from "react";
import { View, Text } from "react-native";
import SignupLoginScreen from "./screens/SignupLoginScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createSwitchNavigator({
  SignupLoginScreen: { screen: SignupLoginScreen },
});
const AppContainer = createAppContainer(switchNavigator);
