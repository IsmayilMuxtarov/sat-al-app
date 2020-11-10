import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {UserScreenItem} from "../components";

import {COLORS as COLOR} from "../styles";

export const UserScreenComponent = ({componentTitle, data}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{componentTitle}</Text>
                </View>
                {
                    data.map((item) => {
                        return (
                            <UserScreenItem key={item.name} onPress={item.onPress}   title={item.name}/>
                        )
                    })

                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // margin: 20,
        marginBottom: 16,
        borderRadius: 4,
        backgroundColor: "#fff",

        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    titleView: {
        height: 50,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "#fff",
        paddingLeft: 20,
    },

    title: {
        color: COLOR.primary,
        fontWeight: "bold",
    }
});

