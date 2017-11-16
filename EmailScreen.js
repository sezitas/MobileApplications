import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, TextInput, TouchableOpacity,
    View, Image, Button, Alert, Linking, KeyboardAvoidingView
} from 'react-native';


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

    handleButtonPress = () => {
        console.log(this.state);
        Linking.openURL(`mailto:${this.state.mail}?subject=${this.state.subject}&body=${this.state.body}`)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainComponent}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('./resources/images/CashFairy.png')} />
                </View>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.mainComponent}>
                    <View style={styles.textComponent}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.textInput}
                            placeholder="mail"
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
                            <Text
                                style={styles.button}
                                onPress={this.handleButtonPress}>
                                Send email!
                        </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
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
