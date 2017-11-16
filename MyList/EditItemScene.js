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
        const { navigate } = this.props.navigation;
        console.log(this.state.inputText);
        params.onChange(params.id, this.state.inputText); 
        navigate('MyList');
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    defaultValue={this.state.inputText}
                    onChangeText={(inputText) => this.setState({inputText})}
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
    },
    container: {
        backgroundColor: '#ecf0f1',
    },
});
