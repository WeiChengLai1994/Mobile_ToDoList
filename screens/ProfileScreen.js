// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    // Function to navigate back to ToDoListScreen with the drawer open
    const goBackWithDrawerOpen = () => {
        navigation.navigate('ToDoList'); // Navigate back to ToDoList
        navigation.openDrawer(); // Open the drawer when navigating back
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Page</Text>
            <Text style={styles.text}>Profile Details</Text>
            <Button title="Go Back to To Do List" onPress={goBackWithDrawerOpen} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#064a59',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'#95e1ec',
    },
    text: {
        fontSize: 18,
        color:'#95e1ec',
    },
});

export default ProfileScreen;
