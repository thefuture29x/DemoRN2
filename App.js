import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './AppNavigator';
import TestIconItem from './components/IconSibaComponent';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25

  },
  textTitle: {
    backgroundColor: 'red'
  },
  scrollItem: {
    paddingLeft: 15,
    paddingRight: 15
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: '#4830D3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

