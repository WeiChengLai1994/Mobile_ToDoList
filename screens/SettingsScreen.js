// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet, Picker } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const clearAppData = () => {
        alert('App data cleared successfully!');
        // Logic to clear stored data (e.g., AsyncStorage.clear())
    };

    const goBackWithDrawerOpen = () => {
        navigation.navigate('ToDoList'); // Navigate back to ToDoList
        navigation.openDrawer(); // Open the drawer when navigating back
    };

    return (
        <View style={styles.container}>
            {/* Dark Mode Toggle */}
            <View style={styles.settingItem}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                />
            </View>

            {/* Change Language */}
            <View style={styles.settingItem}>
                <Text style={styles.settingText}>Language</Text>
                <Picker
                    selectedValue={selectedLanguage}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                >
                    <Picker.Item label="English" value="en" />
                    <Picker.Item label="Spanish" value="es" />
                    <Picker.Item label="French" value="fr" />
                    <Picker.Item label="Chinese" value="zh" />
                </Picker>
            </View>

            {/* Clear App Data */}
            <View style={styles.settingItem}>
                <Button
                    title="Clear App Data"
                    onPress={clearAppData}
                    color="red"
                />
            </View>

            {/* Go Back Button */}
            <View style={styles.settingItem}>
                <Button
                    title="Go Back to To Do List"
                    onPress={goBackWithDrawerOpen}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#064a59',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    settingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#95e1ec',
    },
    picker: {
        height: 50,
        width: 150,
    },
});

export default SettingsScreen;
