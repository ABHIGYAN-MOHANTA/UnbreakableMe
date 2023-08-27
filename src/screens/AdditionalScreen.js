import AToZGuideToComeback from "../components/AToZGuideToComeback";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import PBDHome from "../components/PBDHome";
import PBDSecondHome from "../components/PBDSecondHome";
import PBDThirdHome from "../components/PBDThirdHome";
import Extras from "../components/Extras";
import Movies from "../components/Movies";
import Books from "../components/Books";
const Tab = createBottomTabNavigator();

export default function AdditionalScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "#ffffff",
        tabBarInactiveBackgroundColor: "#000000",
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerTitleStyle: {
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: 25,
        },
      }}
    >
      <Tab.Screen
        name={"Comeback"}
        component={AToZGuideToComeback}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="sword"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Books"}
        component={Books}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bookshelf"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={"PBD"}
        component={PBDHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="pillar"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"PBD II"}
        component={PBDSecondHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="pillar"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"PBD III"}
        component={PBDThirdHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="pillar"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={"Movies"}
        component={Movies}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="movie-open"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Extras"}
        component={Extras}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="folder"
              size={24}
              color={focused ? "#000000" : "#ffffff"}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
