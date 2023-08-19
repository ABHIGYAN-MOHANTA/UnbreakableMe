import { createDrawerNavigator } from "@react-navigation/drawer";
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

const Drawer = createDrawerNavigator();

export default function MainScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#272829",
        drawerInactiveTintColor: "#F0E9D2",
        drawerActiveBackgroundColor: "#F0E9D2",
        drawerInactiveBackgroundColor: "#272829",
        headerTintColor: "#F0E9D2",
        headerStyle: {
          backgroundColor: "#272829",
        },
        headerTitleStyle: {
          color: "#F0E9D2",
          fontWeight: "bold",
          fontSize: 18,
        },
        drawerStyle: {
          backgroundColor: "rgba(240, 233, 210, 0.3)",
        },
      }}
    >
      <Drawer.Screen
        name="Taking Inventory Home"
        component={TakingInventoryHome}
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              name="inventory"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
          headerTitle: "Taking Inventory",
        }}
      />
      <Drawer.Screen
        name="Accountability Mirror Home"
        component={AccountabilityMirrorHome}
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="mirror-variant"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
          headerTitle: "Accountability Mirror",
        }}
      />
      <Drawer.Screen
        name="DiscomfortZone Exploitation"
        component={DiscomfortZoneExploitation}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="grav"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Taking Souls"
        component={TakingSouls}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="ghost"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Armoured Mind"
        component={ArmouredMind}
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="brain"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cookie Jar"
        component={CookieJar}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="cookie-bite"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="The 40% Rule"
        component={RemoveTheGovernor}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="brain"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Optimize your Schedule"
        component={Schedule}
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              name="schedule"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Uncommon Amongst Uncommon"
        component={UncommonAmongstUncommon}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="wolf-pack-battalion"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Empowerment Of Failure"
        component={EmpowermentOfFailure}
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="ios-trophy-sharp"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
