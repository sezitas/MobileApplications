//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';


// create a component
export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
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
                console.log(res);
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

    render() {
        return (
            <List>
                <FlatList
                    Style={styles.list}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            title={`${item.name.first} ${item.name.last}`}
                        />
                    )}
                    keyExtractor={item => item.email}
                />
            </List>
        );
    }

}

const styles = StyleSheet.create({
    itemText: {
        margin: 30,
    },
    innerItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        padding: 1,
    },
    item: {
        height: 40,
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
    },
    mainContainer: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
});

