import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {StatusBar} from "expo-status-bar";

import {SubCategoriesItem} from "./components";

export const SubCategories = ({route, navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor="#2E5C8D"/>
            {
                route.params.subCategories.map((item) => {
                    return (
                        <SubCategoriesItem onPress={() => navigation.push('SubCategories', {
                            subCatTitle: item.name,
                            subCategories: [
                                {
                                    name: "Tum Kiralik Ilanlar",
                                    count: 1
                                },
                                {
                                    name: "Salam",
                                    count: 672.843
                                },
                                {
                                    name: "Elan",
                                    count: 121.615
                                }
                            ]
                        })} key={item.name} name={item.name} count={item.count}/>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingVertical: 40,
    },
});
