import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, TextInput, TouchableOpacity,
    View, Image, Button, Alert, Linking, KeyboardAvoidingView
} from 'react-native';

class EmailReport extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.mainComponent}>
                <View style={styles.textComponent}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        placeholder="email"
                        onChangeText={(text) => this.props.onChangeMail(text)}
                    />
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        placeholder="subject"
                        onChangeText={(text) => this.props.onChangeSubject(text)}
                    />
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInput}
                        placeholder="content"
                        onChangeText={(text) => this.props.onChangeBody(text)}
                    />
                    <TouchableOpacity>
                        <Text style={styles.button}
                            onPress={() => { this.props.onPressButton() }}>
                            Send email!
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

}

export default class EmailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: 'sezitas@yahoo.com',
            subject: 'Test 1',
            body: 'This is my first test'
        };
    }
    static navigationOptions = {
        title: 'Email Screen',
    }

    onPressButton = () => {
        console.log(this.state);
        Linking.openURL(`mailto:${this.state.mail}?subject=${this.state.subject}&body=${this.state.body}`)
    }

    onChangeMail = (mail) => {
        this.setState({ mail })
    }

    onChangeSubject = (subject) => {
        this.setState({ subject })
    }

    onChangeBody = (body) => {
        this.setState({ body })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainComponent}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('./resources/images/CashFairy.png')} />
                </View>
                <EmailReport
                    onChangeSubject={this.onChangeSubject}
                    onChangeMail={this.onChangeMail}
                    onChangeBody={this.onChangeBody}
                    onPressButton={this.onPressButton}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainComponent: {
        justifyContent: 'flex-start',
        backgroundColor: '#2ecc71',
        padding: 2,
        flex: 1,
    },
    button: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#ecf0f1',
        fontWeight: 'bold',
        height: 40,
        backgroundColor: '#27ae60'
    },
    logoContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        height: 90,
        width: 90,
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
