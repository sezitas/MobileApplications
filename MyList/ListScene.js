import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MyList from './MyList';
import EditItemScene from './EditItemScene';

export const ListScene = StackNavigator(
    {
        MyList: { screen: MyList },
        EditItemScene: { screen: EditItemScene }
    },
    {
        headerMode: 'none'
    });