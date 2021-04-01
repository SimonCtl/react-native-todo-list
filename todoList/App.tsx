import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* Todo today section */}
            <View style={styles.tasksSection}>
                <Text style={styles.title}>Todo Today</Text>
                <Task text="🍕 First task"/>
                <Task text="🌮 Second task"/>
                <Task text="🍣 Third task"/>
            </View>

            <View style={styles.actions}>
                <TextInput style={styles.addTaskInput} placeholder='Add a task'/>
                <TouchableOpacity style={styles.addTaskButton}>
                    <Text style={styles.addTaskButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8C82FF',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    addTaskInput: {
        width: 246,
        height: 45,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 4,
        borderRadius: 60,
        textAlign: 'center',
    },
    addTaskButton: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 4,
        borderRadius: 52,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addTaskButtonText: {
        alignItems: 'center',
        fontSize: 50,
        marginTop: -10,
        color: '#55BCF6',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 30,
    }
});
