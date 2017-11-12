//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, List, FlatList, TouchableNativeFeedback } from 'react-native';

// create a component
export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                { key: 'Devin' },
                { key: 'Jackson' },
                { key: 'James' },
                { key: 'Joel' },
                { key: 'John' },
                { key: 'Jillian' },
                { key: 'Jimmy' },
                { key: 'Julie' },
            ],
        };
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList data={this.state.listData}
                    renderItem={({ item }) =>
                        <TouchableNativeFeedback >
                            <Text style={styles.item}>
                                {item.key}
                            </Text>
                        </TouchableNativeFeedback>
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

