import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import {COLORS} from "../../styles";

import {MaterialIcons} from "@expo/vector-icons";

import {User, Login} from '../../screens';


const {Navigator, Screen} = createStackNavigator();

export const UserStackNav = ({navigation}) => {
    return (
        <Navigator>
            <Screen name='User'
                    component={User}
                    options={{
                        headerTitle: 'Bana Ozel',
                        headerStyle: {
                            backgroundColor: COLORS.primary,
                        },
                        headerTitleStyle: {
                            color: "#ffffff"
                        },
                        headerLeft: () => (
                            <MaterialIcons onPress={() => navigation.openDrawer()} style={{marginLeft: 15,}} name="menu"
                                           size={26} color="#fff"/>
                        )
                    }}
            />
            <Screen name='Login'
                    component={Login}
                    options={{
                        headerShown: false,
                        drawerLockMode: 'locked'
                    }}
            />
        </Navigator>
    )
};