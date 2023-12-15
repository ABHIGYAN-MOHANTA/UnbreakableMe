import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, PanResponder, Modal } from "react-native";
import { styles } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainScreen from "./src/screens/MainScreen";
import AdditionalScreen from "./src/screens/AdditionalScreen";
import MindDump from "./src/screens/MindDump";
import EisenhowerMatrix from "./src/screens/EisenhowerMatrix";
import Chat from "./src/screens/Chat";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import quotes from "./src/components/MotivationalQuotes";

const Tab = createBottomTabNavigator();

export default function App() {
  const n = Math.floor(Math.random() * 51);
  const [modalVisible, setModalVisible] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(n);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (_, gestureState) =>
      gestureState.numberActiveTouches === 2,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 50 && modalVisible === false) {
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
          <Text style={styles.header}>
            inspired by David Goggins and PBD! Swipe ✌🏻 Down!
          </Text>

          <StatusBar style="dark" />
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "#000000",
                tabBarInactiveTintColor: "#B0D9B1",
                tabBarActiveBackgroundColor: "#B0D9B1",
                tabBarInactiveBackgroundColor: "#000000",
                headerStyle: {
                  backgroundColor: "#000000",
                },
                headerTitleStFocusedyle: {
                  color: "#B0D9B1",
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
                      color={focused ? "#000000" : "#B0D9B1"}
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
                      color={focused ? "#000000" : "#B0D9B1"}
                    />
                  ),
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="MindDump"
                component={MindDump}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons
                      name="robot-excited-outline"
                      size={24}
                      color={focused ? "#000000" : "#B0D9B1"}
                    />
                  ),
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="EisenhowerMatrix"
                component={EisenhowerMatrix}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons
                      name="matrix"
                      size={24}
                      color={focused ? "#000000" : "#B0D9B1"}
                    />
                  ),
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <Entypo
                      name="chat"
                      size={24}
                      color={focused ? "#000000" : "#B0D9B1"}
                    />
                  ),
                  headerShown: false,
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
        <Modal
          animationType="fade"
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
