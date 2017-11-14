import React from 'react';
import { TabNavigator } from 'react-navigation';

import EmailScreen from './EmailScreen';
import ListScene from './MyList/MyList';


export const Tabs = TabNavigator({
    ListScene: { screen: ListScene },
    Email: { screen: EmailScreen },
    // EditItemScene: { screen: EditItemScene }

}, {
        tabBarOptions: {
            style: {
                backgroundColor: '#27ae59'
            }
        }
    }
);

