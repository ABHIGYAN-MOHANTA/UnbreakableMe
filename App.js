import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, PanResponder, Modal } from "react-native";
import { styles } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainScreen from "./src/screens/MainScreen";
import AdditionalScreen from "./src/screens/AdditionalScreen";
import About from "./src/screens/About";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import quotes from "./src/components/MotivationalQuotes";
const Tab = createBottomTabNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Define PanResponder to detect slide down gesture
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 50) {
        setModalVisible(true);
        // Move to the next quote
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }
    },
    onPanResponderRelease: () => {
      setModalVisible(false);
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} {...panResponder.panHandlers}>
        <View style={styles.container}>
          <Text style={styles.title}>UnbreakableMe</Text>
          <Text style={styles.header}>inspired by David Goggins</Text>
          <StatusBar style="dark" />
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "#272829",
                tabBarInactiveTintColor: "#F0E9D2",
                tabBarActiveBackgroundColor: "#F0E9D2",
                tabBarInactiveBackgroundColor: "#272829",
                headerStyle: {
                  backgroundColor: "#272829",
                },
                headerTitleStFocusedyle: {
                  color: "#F0E9D2",
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            >
              <Tab.Screen
                name="CantHurtMe"
                component={MainScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <FontAwesome5
                      name="dharmachakra"
                      size={24}
                      color={focused ? "#272829" : "#F0E9D2"}
                    />
                  ),
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="Valuetainment"
                component={AdditionalScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <FontAwesome
                      name="briefcase"
                      size={24}
                      color={focused ? "#272829" : "#F0E9D2"}
                    />
                  ),
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="About"
                component={About}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons
                      name="robot-excited-outline"
                      size={24}
                      color={focused ? "#272829" : "#F0E9D2"}
                    />
                  ),
                  headerShown: false,
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{quotes[quoteIndex]}</Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
