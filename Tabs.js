import React from 'react';
import { TabNavigator } from 'react-navigation';

import EmailScreen from './EmailScreen';
import ListSceneWrapper from './MyList/ListSceneWrapper';


export const Tabs = TabNavigator({
    ListSceneWrapper: { 
        screen: ListSceneWrapper 
    },
    Email: { 
        screen: EmailScreen 
    },
}, {
        tabBarOptions: {
            style: {
                backgroundColor: '#27ae59'
            }
        }
    }
);

