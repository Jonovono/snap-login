/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SnapchatLogin from 'react-native-snapchat-login';

export default class App extends Component<{}> {

  prueba = () => {
    SnapchatLogin.login()
      .then((r2) => {
        console.log('login')
        console.log(r2);
      });
  };
  prueba2 = () => {
    SnapchatLogin.logout()
      .then((r2) => {
        console.log('logout')
        console.log(r2);
      });
  };

  prueba3 = () => {
    SnapchatLogin.isLogged()
      .then((r) => {
        console.log('isLogged')
        console.log(r)
      });
  };

  prueba4 = () => {
    SnapchatLogin.getUserInfo()
      .then((r) => {
        console.log('getUserInfo')
        console.log(r)
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login" onPress={this.prueba} />
        <Button title="Logout" onPress={this.prueba2} />
        <Button title="isLogged" onPress={this.prueba3} />
        <Button title="GetInfo" onPress={this.prueba4} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
