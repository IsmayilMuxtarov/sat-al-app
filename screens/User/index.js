import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import {COLORS} from "../../styles";

import {UserScreenComponent} from "../../commons";

export const User = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' backgroundColor="#2E5C8D"/>

            <UserScreenComponent componentTitle="QEYDİYYAT / DAXİL OL"
                                 data={[{name: "Qeydiyyat", onPress: () => navigation.navigate('Home'),},
                                     {name: "Daxil ol", onPress: () => navigation.navigate('Login'),}]}/>

            <UserScreenComponent componentTitle="ELANLARIN İDARƏ OLUNMASI"
                                 data={[{name: "Aktiv elanlar"}, {name: "Deaktiv elanlar"}]}/>

            <UserScreenComponent componentTitle="MESAJLAR"
                                 data={[{name: "Elan mesajları"}, {name: "Get mesajları"}, {name: "Bildiriş"}, {name: "Mobil bildirişlər"}]}/>

            <UserScreenComponent componentTitle="FAVORILƏR"
                                 data={[{name: "Sizə özəl elanlar"}, {name: "Favori elanlar"}, {name: "Favori aramalar"}, {name: "Favori satıcılar"}]}/>

            <UserScreenComponent componentTitle="İSTİFADƏÇİ MƏLUMATLARI"
                                 data={[{name: "İstifadəçi bilgiləri"}, {name: "Nömrə deyişdirmə"}, {name: "Şifrə deyişdirmə"}]}/>

            <UserScreenComponent componentTitle="DİGƏR"
                                 data={[{name: "Haqqımızda"}, {name: "Yardım işləm rəhbəri"}, {name: "Necə istifadə etməli"}]}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: COLORS.background,
    },
});
