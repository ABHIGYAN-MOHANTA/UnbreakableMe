import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { styles } from "../styles/styles.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import PBD from "./PBD.js";
import WorldWarIISpeech from "./WorldWarIISpeech.js";
import Unhappy from "./Unhappy.js";
import Potential from "./Potential.js";
import Mentor from "./Mentor.js";
import Burnout from "./Burnout.js";

const Stack = createStackNavigator();

const PBDSecondHome = () => {
  const navigation = useNavigation();

  const route = useRoute();

  return (
    <SafeAreaView style={styles.subsection}>
      <Stack.Navigator
        initialRouteName="PBDEmpty"
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
          name="PBDEmpty"
          component={PBD}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorldWarIISpeech"
          component={WorldWarIISpeech}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Unhappy"
          component={Unhappy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Potential"
          component={Potential}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mentor"
          component={Mentor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Burnout"
          component={Burnout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      <View>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("WorldWarIISpeech")}
        >
          <Text style={styleSheet.buttonText}>
            Greatest speech ever on leadership during WWI
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Unhappy")}
        >
          <Text style={styleSheet.buttonText}>
            Why Are So Many People Unhappy?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Potential")}
        >
          <Text style={styleSheet.buttonText}>
            How to Reach Your Potential as an Entrepreneur
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Mentor")}
        >
          <Text style={styleSheet.buttonText}>How to Find a Mentor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Burnout")}
        >
          <Text style={styleSheet.buttonText}>
            How to Avoid Burnout as an Entrepreneur
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PBDSecondHome;

const styleSheet = StyleSheet.create({
  button: {
    backgroundColor: "#61677A",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 1,
  },
  buttonText: {
    color: "#F6F6F6",
    fontWeight: "bold",
  },
});
