import React from 'react';
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from "react-native";

import {AntDesign, Ionicons} from '@expo/vector-icons';

import {COLORS} from "../styles";

import {HomeScreenCategoryItem} from "../screens/Home/components";


export const Drawer = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            {/*Left Menu*/}
            <View style={styles.leftMenu}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.leftMenuItem}>
                    <AntDesign name="home" size={22} color="#fff"/>
                    <View style={styles.itemTitleView}>
                        <Text style={styles.itemTitle}>Anasayfa</Text>
                    </View>
                    <Ionicons name="ios-arrow-forward" size={22} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('User')} style={styles.leftMenuItem}>
                    <AntDesign name="user" size={22} color="#fff"/>
                    <View style={styles.itemTitleView}>
                        <Text style={styles.itemTitle}>Bana Ozel</Text>
                    </View>
                    <Ionicons name="ios-arrow-forward" size={22} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Announce')} style={styles.leftMenuItem}>
                    <AntDesign name="plus" size={22} color="#fff"/>
                    <View style={styles.itemTitleView}>
                        <Text style={styles.itemTitle}>Ilan ver</Text>
                    </View>
                    <Ionicons name="ios-arrow-forward" size={22} color="#fff"/>
                </TouchableOpacity>
            </View>
            {/*Categories*/}
            <View style={styles.itemsList}>
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
                <HomeScreenCategoryItem title="Emlak"
                                        description='Konut, Is Yeri, Arsa, Projeler, Bina, Devre, Mulkiyyet ve hayat guvencesi'
                                        iconBackColor="#0060b2"
                                        Drawer={true}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    leftMenu: {
        width: "100%",
        paddingTop: 28,
        backgroundColor: COLORS.primary,
    },

    leftMenuItem: {
        height: 55,
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    itemTitleView: {
        width: "80%",
        justifyContent: "flex-start",
        paddingLeft: 12,
    },

    itemTitle: {
        color: "#fff",
        fontSize: 17,
    },

    itemsList: {
        borderBottomWidth: 2,
        borderTopWidth: 1,
        borderBottomColor: "#d7d7d7",
        borderTopColor: "#d7d7d7",
    },
});
