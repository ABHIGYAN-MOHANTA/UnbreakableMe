import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TakingInventoryHome from "../components/TakingInventoryHome";
import AccountabilityMirrorHome from "../components/AccountabilityMirrorHome";
import DiscomfortZoneExploitation from "../components/DiscomfortZoneExploitation";
import { FontAwesome5 } from "@expo/vector-icons";
import TakingSouls from "../components/TakingSouls";
import ArmouredMind from "../components/ArmouredMind";
import CookieJar from "../components/CookieJar";
import RemoveTheGovernor from "../components/RemoveTheGovernor";
import Schedule from "../components/Schedule";
import UncommonAmongstUncommon from "../components/UncommonAmongstUncommon";
import { Ionicons } from "@expo/vector-icons";
import EmpowermentOfFailure from "../components/EmpowermentOfFailure";
import Intro from "../components/Intro";

const Tab = createMaterialTopTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabActiveTintColor: "#000000",
        tabInactiveTintColor: "#000000",
        tabActiveBackgroundColor: "#F0E68C",
        tabInactiveBackgroundColor: "#000000",
        headerTintColor: "#000000",
        tabStyle: {
          backgroundColor: "#F0E68C",
        },
        tabBarShowLabel: false,
        tabBarContentContainerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="I"
        component={Intro}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="water-well"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
          headerTitle: "Intro",
        }}
      />
      <Tab.Screen
        name="II"
        component={TakingInventoryHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="inventory"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
          headerTitle: "Taking Inventory",
        }}
      />
      <Tab.Screen
        name="III"
        component={AccountabilityMirrorHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="mirror-variant"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
          headerTitle: "Accountability Mirror",
        }}
      />
      <Tab.Screen
        name="IV"
        component={DiscomfortZoneExploitation}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="grav"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="V"
        component={TakingSouls}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="ghost"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="VI"
        component={ArmouredMind}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="brain"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="VII"
        component={CookieJar}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="cookie-bite"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="VIII"
        component={RemoveTheGovernor}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="brain"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="IX"
        component={Schedule}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="schedule"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="X"
        component={UncommonAmongstUncommon}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="wolf-pack-battalion"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="XI"
        component={EmpowermentOfFailure}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-trophy-sharp"
              size={24}
              color={focused ? "#333333" : "#F0E68C"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
