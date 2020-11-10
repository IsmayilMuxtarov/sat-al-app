import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export const UserScreenItem = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        // backgroundColor: "#fff",
        borderBottomColor: "#eeeeee",
        borderBottomWidth: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        display: "flex",
        justifyContent: "center",
        paddingLeft: 20,
    },

    title: {
        color: "#646464"
    }
});

