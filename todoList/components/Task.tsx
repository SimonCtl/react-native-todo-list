import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props: {text: string}) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: 335,
        height: 53,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        shadowOpacity: 0.1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 5.46,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 5,
        backgroundColor: 'rgba(47, 105, 255, 0.4)'
    },
    itemText: {
        maxWidth: "80%",
    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 15
    },
});

export default Task;