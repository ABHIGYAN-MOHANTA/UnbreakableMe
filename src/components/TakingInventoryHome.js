import { createStackNavigator } from "@react-navigation/stack";
import TodoList from "./TodoList.js";
import TakingInventory from "./TakingInventory.js";
import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";

const Stack = createStackNavigator();

const TakingInventoryHome = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.subheading}>Taking Inventory Home</Text>
      <Stack.Navigator
        initialRouteName="Taking Inventory"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F0E68C",
          },
          headerTintColor: "#000000",
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
        <Stack.Screen
          name="Proceed to write..."
          component={TodoList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default TakingInventoryHome;
