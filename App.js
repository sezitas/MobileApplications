/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, 
  View, Image, Button, Alert, Linking} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { mail: 'sezitas@yahoo.com',
      subject: 'Test 1', 
      body: 'This is my first test'
    }; 
  }

  _onPressButton() {
    console.log(this.state); 
    const mail = this.state.mail;
    const subject = this.state.subject;
    const body = this.state.body;
    Linking.openURL(`mailto:${mail}?subject=${subject}&body=${body}`) 
  }

  render() {
    return (  
      <View style={{
        padding: 10,
        flex: 1,
        }}>
        <TextInput
          style={{height: 40}}
          placeholder="email"
          onChangeText={(mail) => this.setState({mail})}
        /> 
        <TextInput
          style={{height: 40}}
          placeholder="subject"
          onChangeText={(subject) => this.setState({subject})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="content" 
          onChangeText={(body) => this.setState({body})}
        /> 
        <Button 
          onPress={ () => { this._onPressButton() } } 
          title="Send email"  
        />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

