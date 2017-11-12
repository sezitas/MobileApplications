import React, { Component } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import SendEmail from './SendEmail'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SendEmail/>
    );
  }
}

const styles = StyleSheet.create({

});

