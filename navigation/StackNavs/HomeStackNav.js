import React from 'react';
import {View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

// icons
import {MaterialIcons, AntDesign} from '@expo/vector-icons';

// colors
import {COLORS} from "../../styles"

// screens
import {Home, SubCategories} from '../../screens';

const {Navigator, Screen} = createStackNavigator();

export const HomeStackNav = ({navigation}) => {
    return (
        <Navigator>
            <Screen name='Home'
                    component={Home}
                    options={{
                        headerTitle: 'sahibinden.com',
                        headerStyle: {
                            backgroundColor: COLORS.primary,
                        },
                        headerTitleStyle: {
                            color: "#ffffff"
                        },
                        headerRight: () => (
                            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <AntDesign onPress={() => navigation.navigate('User')} style={{marginRight: 20}}
                                           name="mail" size={19} color="#fff"/>
                                <AntDesign onPress={() => navigation.navigate('User')} style={{marginRight: 15}}
                                           name="user" size={18} color="#fff"/>
                            </View>
                        ),
                        headerLeft: () => (
                            <MaterialIcons onPress={() => navigation.openDrawer()} style={{marginLeft: 15,}} name="menu"
                                           size={26} color="#fff"/>
                        )
                    }}
            />
            <Screen name='SubCategories'
                    component={SubCategories}
                    options={({route}) => ({
                        headerTitle: route.params.subCatTitle,
                        headerStyle: {
                            backgroundColor: "#2E5C8D",
                        },
                        headerTitleStyle: {
                            color: "#ffffff"
                        },
                        headerRight: () => (
                            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                {/*<Text>{route.params}</Text>*/}
                            </View>
                        ),
                        headerLeft: () => (
                            <MaterialIcons onPress={() => navigation.openDrawer()} style={{marginLeft: 15,}} name="menu"
                                           size={26} color="#fff"/>
                        )
                    })}
            />
        </Navigator>
    )
};