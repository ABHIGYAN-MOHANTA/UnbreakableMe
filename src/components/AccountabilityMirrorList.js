import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const AccountabilityMirrorList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load data from AsyncStorage on component mount
  useEffect(() => {
    retrieveData();
  }, []);

  // Function to retrieve data from AsyncStorage
  const retrieveData = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem(
        "@accountabilityMirrorList"
      );
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage:", error);
    }
  };

  // Function to save data to AsyncStorage
  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem(
        "@accountabilityMirrorList",
        JSON.stringify(data)
      );
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskItem = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskItem]);
      saveData([...tasks, newTaskItem]); // Save data to AsyncStorage
      setNewTask("");
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveData(updatedTasks); // Save data to AsyncStorage
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveData(updatedTasks); // Save data to AsyncStorage
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <View style={styles.taskTextContainer}>
        <TouchableOpacity onPress={() => handleToggleComplete(item.id)}>
          <Text
            style={[styles.taskText, item.completed && styles.completedTask]}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleDeleteTask(item.id)}
      >
        <Text style={styles.deleteButton}>
          {<MaterialIcons name="delete" size={24} color="#F6F6F6" />}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write here..."
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>
            {<FontAwesome name="plus" size={24} color="#F6F6F6" />}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    color: "#F6F6F6",
  },
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#F6F6F6",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  flatList: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: "#D8D9DA",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  completedTask: {
    textDecorationLine: "line-through",
  },
  deleteButton: {
    color: "#D8D9DA",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});

export default AccountabilityMirrorList;
