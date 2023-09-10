import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const QuoteDisplay = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [randomItem, setRandomItem] = useState(null);
  const [showFullList, setShowFullList] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Load data from AsyncStorage on component mount
  useEffect(() => {
    retrieveData();
  }, []);

  // Function to retrieve data from AsyncStorage
  const retrieveData = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("@quoteDisplay");
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
      await AsyncStorage.setItem("@quoteDisplay", JSON.stringify(data));
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

  const handleRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setRandomItem(tasks[randomIndex]);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const toggleFullList = () => {
    setShowFullList(!showFullList);
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
          {<MaterialIcons name="delete" size={24} color="#000000" />}
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
            {<FontAwesome name="plus" size={24} color="#000000" />}
          </Text>
        </TouchableOpacity>
      </View>
      {/* Button to display a random item */}
      <TouchableOpacity style={styles.addButton} onPress={handleRandomItem}>
        <Text style={styles.addButtonText}>Show a random Quote</Text>
      </TouchableOpacity>

      {/* Display the randomly selected item */}
      {randomItem && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={showPopup}
          onRequestClose={() => {
            setShowPopup(false);
          }}
        >
          <View style={styles.popupContainer}>
            <Text style={styles.popupText}>
              {randomItem ? randomItem.text : ""}
            </Text>
          </View>
        </Modal>
      )}
      <View style={styles.gap}></View>
      {/* Button to display the full flat list */}
      <TouchableOpacity style={styles.addButton} onPress={toggleFullList}>
        <Text style={styles.addButtonText}>
          {showFullList ? "Hide Quotes" : "Show all Quotes"}
        </Text>
      </TouchableOpacity>
      <View style={styles.gap}></View>
      {/* Display the flat list */}
      {showFullList && (
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
      )}
    </View>
  );
};

export default QuoteDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
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
    borderColor: "#9966CC",
    borderRadius: 4,
    padding: 10,
    color: "#9966CC",
  },
  addButton: {
    backgroundColor: "#9966CC",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addbuttonText: {
    color: "#000000",
    fontWeight: "bold",
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
    color: "#9966CC",
  },
  completedTask: {
    textDecorationLine: "line-through",
  },
  deleteButton: {
    color: "#9966CC",
  },
  text: {
    color: "#9966CC",
    marginBottom: 10,
    textAlign: "center",
  },
  subheading: {
    color: "#9966CC",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    marginTop: -25,
    marginBottom: 10,
  },
  gap: {
    height: 10,
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  popupText: {
    color: "#9966CC",
    fontSize: 18,
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
});
