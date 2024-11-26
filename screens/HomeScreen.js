// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>To Do List</Text>
            {/* Wrap buttons in View to apply margin */}
            <View style={styles.buttonContainer}>
                <Button
                    title="Enter ToDo List" 
                    onPress={() => navigation.navigate('ToDoList')} 
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="About" 
                    onPress={() => navigation.navigate('About')} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#064a59',
    },
    title: {
        fontSize: 60,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#95e1ec',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20, 
        width: '15%',
    },
});

export default HomeScreen;
