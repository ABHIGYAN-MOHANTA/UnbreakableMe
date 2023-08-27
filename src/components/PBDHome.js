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
import Anxiety from "../components/Anxiety";
import Words from "../components/Words";
import Standards from "../components/Standards";
import AToZGuideToWorkEthic from "../components/AToZGuideToWorkEthic";
import Price from "./Price.js";

const Stack = createStackNavigator();

const PBDHome = () => {
  const navigation = useNavigation();

  const route = useRoute();

  return (
    <SafeAreaView style={styles.subsection}>
      <Stack.Navigator
        initialRouteName="PBDEmpty"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#E6DDC4",
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
          name="Anxiety"
          component={Anxiety}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Words"
          component={Words}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Standards"
          component={Standards}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkEthic"
          component={AToZGuideToWorkEthic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Price"
          component={Price}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      <View>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Anxiety")}
        >
          <Text style={styleSheet.buttonText}>
            How to handle Anxiety & Depression
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Words")}
        >
          <Text style={styleSheet.buttonText}>Stop using these Words</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Standards")}
        >
          <Text style={styleSheet.buttonText}>Raise your Standards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("WorkEthic")}
        >
          <Text style={styleSheet.buttonText}>
            How to improve your Work Ethic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={() => navigation.navigate("Price")}
        >
          <Text style={styleSheet.buttonText}>
            The Price Of Winning & Why Its Worth It
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PBDHome;

const styleSheet = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 1,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
  },
});
