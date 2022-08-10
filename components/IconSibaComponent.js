<script src="http://localhost:8097"></script>
import React, { useState } from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'
import HappyImage from '../assets/happy.png'


export default function TestIconItem(props) {
    const { item } = props;
    return (
        <TouchableOpacity 
        activeOpacity={0.5}
        onPress={() => {
            Alert.alert('Woooo');
        }}>
            <View style={[styles.container, styles.shadowProp]}>
                <Text style={styles.title}>
                    {item.name}
                </Text>
                <Image source={HappyImage} style={styles.happyIcon}></Image>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'pink',
        borderRadius: 5,
        margin: 10
    },
    happyIcon: {
        width: 100,
        height: 100
    },
    title: {
        alignItems: 'center',
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
});