import React from 'react';
import { TabNavigator } from 'react-navigation';

import EmailScreen from './EmailScreen';
import MyList from './MyList'

export const Tabs = TabNavigator({
    Email: { screen: EmailScreen },
    List: { screen: MyList },
}, {
        tabBarOptions: {
            style: {
                backgroundColor: '#27ae59'
            }
        }
    }
);

