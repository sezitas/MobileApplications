import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default class EditItemScene extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: this.props.navigation.state.params.itemText
        };
    }

    handleButtonPress = () => {
        const { params } = this.props.navigation.state;
        params.onChange(params.id, this.state.inputText);
        this.props.navigation.goBack();
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    defaultValue={this.state.inputText}
                    onChangeText={(inputText) => this.setState({ inputText })}
                />
                <Button
                    title='Done'
                    onPress={this.handleButtonPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        textAlign: 'center',
        backgroundColor: '#27ae60'
    },
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#2ecc71',
    },
});
