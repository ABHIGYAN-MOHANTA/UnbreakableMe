import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";

const CookieJar = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
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
      const storedTasks = await AsyncStorage.getItem("@cookieJar");
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
      await AsyncStorage.setItem("@cookieJar", JSON.stringify(data));
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
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require("../../assets/cookie.mp4")}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={setStatus}
        onLoad={() => {
          video.current.playAsync(0);
        }}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.subheading}>Cookie Jar</Text>
          <Text style={styles.text}>
            Whenever you faced failure or rejection, but then you turned things
            around and triumphed, these memories are your cookies in your mental
            cookie jar! When life gets tough and things look bleak, you reach
            into this jar, grab a cookie, and remind yourself of your past
            victories. Gather strength from your own history of overcoming
            obstacles.
          </Text>
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
            <Text style={styles.addButtonText}>Grab a Cookie</Text>
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
              {showFullList ? "Hide Cookies" : "Show all Cookies"}
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
      </ScrollView>
    </View>
  );
};

export default CookieJar;

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
    borderColor: "#B0D9B1",
    borderRadius: 4,
    padding: 10,
    color: "#B0D9B1",
  },
  addButton: {
    backgroundColor: "#B0D9B1",
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
    color: "#B0D9B1",
    backgroundColor: "#00000080",
    borderRadius: 10,
    padding: 10,
  },
  completedTask: {
    textDecorationLine: "line-through",
  },
  deleteButton: {
    color: "#B0D9B1",
  },
  text: {
    color: "#B0D9B1",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#00000080",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  subheading: {
    color: "#B0D9B1",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    marginTop: -30,
    marginBottom: 10,
    backgroundColor: "#00000080",
    borderRadius: 10,
    padding: 10,
  },
  gap: {
    height: 10,
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popupText: {
    color: "#B0D9B1",
    fontSize: 18,
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  backgroundVideo: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
