import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import {Search} from '../../screens';

const {Navigator, Screen} = createStackNavigator();

export const SearchStackNav = () => {
    return(
        <Navigator>
            <Screen options={{title: 'Search'}} name='Search' component={Search}/>
        </Navigator>
    )
};