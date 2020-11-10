import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StatusBar} from "expo-status-bar";


export const Login = () => {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style='dark' backgroundColor="#fff"/>
                <Text></Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: "#fff"
    }
});

