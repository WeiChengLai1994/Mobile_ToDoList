// screens/AboutScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
    const currentDate = new Date().toLocaleDateString();
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // Update the clock every second
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Name: My ToDo App</Text>
            <Text style={styles.text}>Created by: Alan Lai</Text>
            <Text style={styles.text}>Student ID: 000912915</Text>
            <Text style={styles.text}>Date: {currentDate}</Text>
            <Text style={styles.text}>Time: {currentTime}</Text> {/* Display real-time */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#064a59',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'#95e1ec',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color:'#95e1ec',
    },
});

export default AboutScreen;
