import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ToDoListScreen = ({ navigation }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
        <Text style={[styles.taskText, item.completed && styles.completedTask]}>{item.text}</Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => deleteTask(item.id)} color="blue" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My To Do List</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
          <Icon name="menu" size={30} color="#95e1ec" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your to do tasks here"
        value={task}
        onChangeText={setTask}
      />
      <Button title="確認" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#064a59',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    color:'#95e1ec',
  },
  title: {
    fontSize: 30,
    color:'#95e1ec',
  },
  menuIcon: {
    padding: 10,
    color:'#95e1ec',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    color:'#95e1ec',

  },
  list: {
    width: '100%',
    color:'#95e1ec',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color:'#95e1ec',
  },
  
  taskText: {
    fontSize: 18,
    color:'#95e1ec',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default ToDoListScreen;
