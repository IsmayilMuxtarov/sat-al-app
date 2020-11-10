import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import {textShortering} from "../../../utils";


const windowWidth = Dimensions.get('window').width;


export const HomeScreenCategoryItem = ({title, description, iconBackColor, IconName, Drawer, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>

            <View style={styles.leftIcon}>
                <View style={[styles.leftIconView, {backgroundColor: iconBackColor}]}>
                    <AntDesign name="home" size={21} color="#fff"/>
                </View>
            </View>

            <View style={styles.rightSide}>

                <View style={styles.middleTexts}>
                    <Text style={styles.mainText}>{textShortering(title, (24 * windowWidth / 330))}</Text>
                    {
                        description ?
                            <Text style={styles.descriptionText}>
                                {textShortering(description, (Drawer ? (31 * windowWidth / 290) : (45 * windowWidth / 360)))}
                            </Text>
                            : null
                    }
                </View>

                {
                    Drawer ? null :
                        <View style={styles.rightIcon}>
                            <AntDesign name="right" size={14} color="#c8c8c8"/>
                        </View>

                }
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        height: 54,
        display: "flex",
        flexDirection: "row",
        borderBottomColor: "#d7d7d7",
        borderBottomWidth: 1,
    },

    leftIcon: {
        width: "20%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    leftIconView: {
        width: 34,
        height: 34,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginLeft: 7,
    },

    rightSide: {
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
    },

    middleTexts: {
        height: "100%",
        width: "90%",
        justifyContent: "center",
        paddingLeft: 6,
    },

    mainText: {
        fontSize: 16,
    },

    descriptionText: {
        fontSize: 12,
        color: "#9f9f9f",
    },

    rightIcon: {
        height: "100%",
        width: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 15,
    },

});