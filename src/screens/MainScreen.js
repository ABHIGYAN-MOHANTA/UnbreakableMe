import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#272829",
        tabBarInactiveTintColor: "#61677A",
        tabBarActiveBackgroundColor: "#61677A",
        tabBarInactiveBackgroundColor: "#272829",
        headerStyle: {
          backgroundColor: "#272829",
        },
        headerTitleStyle: {
          color: "#D8D9DA",
          fontWeight: "bold",
          fontSize: 25,
        },
        tabBarLabelStyle: {
          display: "none", // Hide tab labels
        },
      }}
    >
      <Tab.Screen
        name="Inventory"
        component={TakingInventoryHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="inventory"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Accountability Mirror Home"
        component={AccountabilityMirrorHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="mirror-variant"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DiscomfortZone Exploitation"
        component={DiscomfortZoneExploitation}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="grav"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Taking Souls"
        component={TakingSouls}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="ghost"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Armoured Mind"
        component={ArmouredMind}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="brain"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cookie Jar"
        component={CookieJar}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="cookie-bite"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="40% Rule"
        component={RemoveTheGovernor}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="brain"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="schedule"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UncommonAmongstUncommon"
        component={UncommonAmongstUncommon}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="wolf-pack-battalion"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="EmpowermentOfFailure"
        component={EmpowermentOfFailure}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-trophy-sharp"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
