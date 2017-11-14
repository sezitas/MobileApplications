import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button } from 'react-native';

import { Tabs } from './Tabs';
// import { ListScene } from './MyList/ListScene';

export default class App extends Component {
  render() {
    return (
      <Tabs />
    );
  }
}

const styles = StyleSheet.create({
});