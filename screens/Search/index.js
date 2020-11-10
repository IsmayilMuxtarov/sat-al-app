import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Search = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor="#2E5C8D"/>
            <Text>Search</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
