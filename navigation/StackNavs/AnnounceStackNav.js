import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import {Announce, Home} from '../../screens';
import {View} from "react-native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";

const {Navigator, Screen} = createStackNavigator();

export const AnnounceStackNav = ({navigation}) => {
    return (
        <Navigator>
            <Screen name='Announce'
                    component={Announce}
                    options={{
                        headerTitle: 'Announce',
                        headerStyle: {
                            backgroundColor: "#2E5C8D",
                        },
                        headerTitleStyle: {
                            color: "#ffffff"
                        },
                        headerRight: () => (
                            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <AntDesign onPress={() => navigation.navigate('Announce')} style={{marginRight: 20}}
                                           name="mail" size={19} color="#fff"/>
                                <AntDesign onPress={() => navigation.navigate('Home')} style={{marginRight: 15}}
                                           name="user" size={18} color="#fff"/>
                            </View>
                        ),
                        headerLeft: () => (
                            <MaterialIcons onPress={() => navigation.openDrawer()} style={{marginLeft: 15,}} name="menu"
                                           size={26} color="#fff"/>
                        )
                    }}
            />
        </Navigator>
    )
};