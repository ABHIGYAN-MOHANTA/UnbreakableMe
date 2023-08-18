import { createStackNavigator } from "@react-navigation/stack";
import TodoList from "./TodoList.js";
import TakingInventory from "./TakingInventory.js";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles.js";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const TakingInventoryHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.subsection}>
      <Stack.Navigator
        initialRouteName="Taking Inventory"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5B9A8B",
          },
          headerTintColor: "#C8E4B2",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Taking Inventory"
          component={TakingInventory}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Proceed to write..." component={TodoList} />
      </Stack.Navigator>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Proceed to write...")}
      >
        <Text style={styles.buttonText}>Proceed to write...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakingInventoryHome;
