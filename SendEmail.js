import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, TextInput, TouchableOpacity,
    View, Image, Button, Alert, Linking, KeyboardAvoidingView
} from 'react-native';
import MyList from './List/MyList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: 'sezitas@yahoo.com',
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
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.mainComponent}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('./resources/images/CashFairy.png')} />
                </View>
                <View style={styles.textComponent}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        placeholder="email"
                        onChangeText={(mail) => this.setState({ mail })}
                    />
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        placeholder="subject"
                        onChangeText={(subject) => this.setState({ subject })}
                    />
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        placeholder="content"
                        onChangeText={(body) => this.setState({ body })}
                    />
                    <TouchableOpacity>
                        <Button style={styles.button}
                            onPress={() => { this._onPressButton() }}
                            title="Send email"
                        />
                    </TouchableOpacity>
                </View>
                <MyList />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    mainComponent: {
        backgroundColor: '#2ecc71',
        padding: 2,
        flex: 1,
    },
    button: {
        backgroundColor: '#27ae60'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 60,
        width: 60,
        justifyContent: 'center',
    },
    textComponent: {
        padding: 5,
    },
    textInput: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        height: 40,
        marginBottom: 10,
    },
});
