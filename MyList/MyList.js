import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 20,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();

    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    changeItemValue = (id, value) => {
        var index = this.state.data.findIndex(x => x.email = id);
        const newData = this.state.data;
        newData[index].name.first = value;
        console.log('MyList::originalArray: ' + this.state.data[index].name.first);
        console.log('MyList::newArray: ' + newData[index].name.first);
        this.setState({ data: newData });
        console.log('MyList::originalArray after setState: ' + this.state.data[index].name.first);
    }

    render() {
        return (
            <FlatList
                Style={styles.list}
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        style={styles.touchableItem}
                        onPress={() => {
                            this.props.navigation.navigate('EditItemScene', {
                                itemText: item.name.first,
                                id: item.email,
                                onChange: this.changeItemValue
                            })
                        }}>
                        <Text style={styles.item}>
                            {item.name.first}
                        </Text>
                    </TouchableHighlight>
                )}
                keyExtractor={item => item.email}
            />
        );
    }

}

const styles = StyleSheet.create({
    touchableItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        fontWeight: 'bold',
        fontSize: 16,
        height: 35,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27ae60',
    },
    list: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

