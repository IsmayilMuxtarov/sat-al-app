import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeStackNav, UserStackNav, AnnounceStackNav, SearchStackNav} from '../StackNavs';
import {Drawer} from "../../commons";

const {Navigator, Screen} = createDrawerNavigator();

export const RootNav = () => {
    return (
        <Navigator drawerStyle={{
            width: "80%",
        }}
                   drawerContent={({...props}) => <Drawer {...props}/>}
        >
            <Screen name='HomeStack' component={HomeStackNav}/>
            <Screen name='UserStack' component={UserStackNav}/>
            <Screen name='AnnounceStack' component={AnnounceStackNav}/>
            <Screen name='SearchStack' component={SearchStackNav}/>
        </Navigator>
    )
}