import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
    return (
        <View style={styles.container}>

            {/* Todo today section */}
            <View style={styles.tasksSection}>
                <Text style={styles.title}>Todo Today</Text>
            </View>

            <View style={styles.tasks}>
                <Task text="🍕 First task"/>
                <Task text="🌮 Second task"/>
                <Task text="🍣 Third task"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8C82FF',
    },
    tasksSection: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    tasks: {
        marginHorizontal: 20,
        marginVertical: 20
    }
});
