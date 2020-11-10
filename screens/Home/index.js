import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';

import {HomeScreenCategoryItem} from "./components";

import {COLORS} from "../../styles";

export const Home = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' backgroundColor="#2E5C8D"/>
            {/*Search*/}
            <View style={styles.searchView}>
                <TextInput placeholder="Kelime veya ilan No. ile ara"
                           style={styles.searchInput}
                           onFocus={() => navigation.navigate('SearchStack')}
                />
                <MaterialIcons style={styles.searchIcon} name="search" size={24} color="#b5b5b5"/>
            </View>

            {/*Items List*/}
            <View style={styles.itemsList}>
                <HomeScreenCategoryItem
                    onPress={() => navigation.navigate('SubCategories', {
                        subCatTitle: "Is makineleri ve sanayesi",
                        subCategories: [
                            {
                                name: "Tum Kiralik Ilanlar",
                                count: 54.656
                            },
                            {
                                name: "Konut",
                                count: 672.843
                            },
                            {
                                name: "Is Yeri",
                                count: 121.615
                            }
                        ]
                    })}
                    title="Is makineleri ve sanayesi"
                    description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                    iconBackColor="#0060b2"
                />
                <HomeScreenCategoryItem onPress={() => navigation.navigate('SubCategories', {subCatTitle: "Emlak"})}
                                        title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"/>
            </View>

            {/*Aditional categories*/}
            <View style={styles.addCategories}>
                <HomeScreenCategoryItem title="ACIL ACIL" iconBackColor="#868686"
                />
                <HomeScreenCategoryItem title="FIYATI DUSENLER" iconBackColor="#868686"/>
                <HomeScreenCategoryItem title="SON 48 SAAT" iconBackColor="#868686"/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    searchView: {
        width: "100%",
        position: "relative",
        padding: 18,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#d0d0d0",
        backgroundColor: "#ffffff",
    },

    searchIcon: {
        position: "absolute",
        left: 30,
        top: 30,
        fontWeight: "bold",
    },

    searchInput: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#b5b5b5",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 44,
        fontSize: 17
    },

    itemsList: {
        flex: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: "#d7d7d7",
        borderTopColor: "#d7d7d7",
        marginBottom: 15,
    },

    addCategories: {
        flex: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: "#d7d7d7",
        borderTopColor: "#d7d7d7",
    }
});
