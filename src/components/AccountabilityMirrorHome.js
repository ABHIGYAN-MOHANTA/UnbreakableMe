import { createStackNavigator } from "@react-navigation/stack";
import AccountabilityMirror from "./AccountabilityMirror.js";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles.js";
import Mirror from "./Mirror.js";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const AccountabilityMirrorHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.subsection}>
      <Stack.Navigator
        initialRouteName="AccountabilityMirror"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#61677A",
          },
          headerTintColor: "#D8D9DA",
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Mirror")}
      >
        <Text style={styles.buttonText}>Proceed to On the Go Mirror</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountabilityMirrorHome;
