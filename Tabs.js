import React from 'react';
import { TabNavigator } from 'react-navigation';

import EmailScreen from './EmailScreen';
import MyList from './MyList'

export const Tabs = TabNavigator({
    List: { screen: MyList },
    Email: { screen: EmailScreen },
}, {
        tabBarOptions: {
            style: {
                backgroundColor: '#27ae59'
            }
        }
    }
);

