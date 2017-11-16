import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: this.getInitialListData(),
            page: 1,
            seed: 20,
            error: null,
            refreshing: false,
            selected: (new Map(): Map<string, boolean>)
        };
    }
    
    getInitialListData = () => {
        var data = [
            { id: 0, name: 'Bob' },
            { id: 1, name: 'Nanette Kong' },
            { id: 2, name: 'Daren Saavedra' },
            { id: 3, name: 'Gladis Mayhew' },
            { id: 4, name: 'Dori Juarez' },
            { id: 5, name: 'Del Moll' },
            { id: 6, name: 'Everett Williamson' },
            { id: 7, name: 'Nadine Watts' },
            { id: 8, name: 'Phyllis Gonzales' },
            { id: 9, name: 'Leo Nelson' },
            { id: 10, name: 'Frederick Barrett' },
            { id: 11, name: 'Kara Shaw' },
            { id: 12, name: 'Jennifer Cooper' },
            { id: 13, name: 'Theresa Schmidt' },
            { id: 14, name: 'Lauren Bennett' },
            { id: 15, name: 'Sheri Coleman' },           
        ];
        return data;
    }

    handleListItemChange = (index, value) => {
        const newData = [...this.state.data];
        newData[index].name = value;
        this.setState( (state) => { 
            data = newData;
            const selected = new Map(state.selected);
            selected.set(index, !selected.get(index)); 
            return { selected, data};
        });
    }

    renderFlatListItem(item) {
        return (
            <View key={"parentView" + item.topicCat} style={styles.gridItem}>
                <Text key={"topicCat" + item.topicCat} style={styles.topicCatText}>{item.topicCat}</Text>
                <GridView key={"gridView" + item.topicCat} gridViewData={item.topicCatData} openSubCat={this._openSubCat} parentKey={"Catalgue"} />
            </View>
        )
    }

    render() {
        return (
            <FlatList
                Style={styles.list}
                data={this.state.data}
                extraData={this.state} 
                renderItem={({ item }) => (
                    <TouchableHighlight
                        // selected={this.selected}
                        style={styles.touchableItem}
                        onPress={() => {
                            this.props.navigation.navigate('EditItemScene', {
                                id: item.id,
                                itemText: item.name,
                                onChange: this.handleListItemChange
                            })
                        }}>
                        <Text style={styles.item}>
                            {item.name}
                        </Text>
                    </TouchableHighlight>
                )}
                keyExtractor={item => item.id}
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

