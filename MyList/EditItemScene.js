import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class EditItemScene extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    value={() => 
                        { return ( this.props.navigation.state.params.itemText ) }}
                    onChangetext={(text) => {
                        this.props.navigation.state.params.onChange(this.props.navigation.state.params.id, text)
                    }}
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
