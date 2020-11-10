import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Announce = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor="#2E5C8D"/>
            <Text>Announce</Text>
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
