import { createStackNavigator } from "@react-navigation/stack";
import AccountabilityMirror from "./AccountabilityMirror.js";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../styles/styles.js";
import Mirror from "./Mirror.js";

const Stack = createStackNavigator();

const AccountabilityMirrorHome = () => {
  return (
    <View style={styles.subsection}>
      <Stack.Navigator
        initialRouteName="AccountabilityMirror"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#B0D9B1",
          },
          headerTintColor: "#B0D9B1",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="AccountabilityMirror"
          component={AccountabilityMirror}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mirror"
          component={Mirror}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AccountabilityMirrorHome;
