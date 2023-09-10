import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import Trash from "../components/Trash";
import ImportantUrgent from "../components/ImportantUrgent";
import ImportantNotUrgent from "../components/ImportantNotUrgent";
import NotImportantUrgent from "../components/NotImportantUrgent";

const Tab = createBottomTabNavigator();

export default function EisenhowerMatrix() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#9966CC",
        tabBarActiveBackgroundColor: "#9966CC",
        tabBarInactiveBackgroundColor: "#000000",
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerTitleStyle: {
          color: "#9966CC",
          fontWeight: "bold",
          fontSize: 25,
        },
      }}
    >
      <Tab.Screen
        name={"Important Urgent"}
        component={ImportantUrgent}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="clockcircle"
              size={24}
              color={focused ? "#000000" : "#9966CC"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Important Not-Urgent"}
        component={ImportantNotUrgent}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-calendar"
              size={24}
              color={focused ? "#000000" : "#9966CC"}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Not-Important Urgent"}
        component={NotImportantUrgent}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="share-all-outline"
              size={24}
              color={focused ? "#000000" : "#9966CC"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Not-Important Not-Urgent"}
        component={Trash}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-trash"
              size={24}
              color={focused ? "#000000" : "#9966CC"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
