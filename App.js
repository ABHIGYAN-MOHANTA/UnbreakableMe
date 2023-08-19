import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainScreen from "./src/screens/MainScreen";
import AdditionalScreen from "./src/screens/AdditionalScreen";
import About from "./src/screens/About";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}
