import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootNav} from './RootNav'

export const Navigation = () => {
    return (
        <NavigationContainer>
            <RootNav/>
        </NavigationContainer>
    )
}