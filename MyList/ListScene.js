import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { MyList } from './MyList';
import { EditItemScene } from './EditItemScene'

const ListScene = StackNavigator({
    MyList: {
        screen: MyList, navigationOptions: {
            headerTitle: 'MyList',
        },
    },
    EditItemScene: {
        screen: EditItemScene,
        navigationOptions: {
            headerTitle: 'EditItemScene',
        },
    }

});