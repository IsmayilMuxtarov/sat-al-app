import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";


export const SubCategoriesItem = ({name, count, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.subCatItem}>
            <Text style={styles.itemTitle}>{name}</Text>
            <Text style={styles.itemCount}>{count}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    subCatItem: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingRight: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderColor: "#efefef",

    },

    itemTitle: {
        fontSize: 17,
        color: "#000",
    },

    itemCount: {
        color: "#000",
        fontSize: 14,
    }


});