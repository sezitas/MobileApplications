import React, { Component } from 'react';
import { View } from 'react-native';

import { ListScene } from './ListScene';

export default class ListSceneWrapper extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ListScene navigation={this.props.navigation} />
            </View>
        );
    }
}

ListSceneWrapper.router = ListScene.router;