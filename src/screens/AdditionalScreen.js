import AToZGuideToComeback from "../components/AToZGuideToComeback";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PBDHome from "../components/PBDHome";
import PBDSecondHome from "../components/PBDSecondHome";
import PBDThirdHome from "../components/PBDThirdHome";
import Extras from "../components/Extras";
import BooksAndMovies from "../components/BooksAndMovies";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

export default function AdditionalScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabActiveTintColor: "#000000",
        tabInactiveTintColor: "#000000",
        tabActiveBackgroundColor: "#B0D9B1",
        tabInactiveBackgroundColor: "#000000",
        headerTintColor: "#000000",
        tabStyle: {
          backgroundColor: "#B0D9B1",
        },
        tabBarShowLabel: false,
        tabBarContentContainerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name={"CBK"}
        component={AToZGuideToComeback}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="sword"
              size={24}
              color={focused ? "#333333" : "#B0D9B1"}
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
              color={focused ? "#333333" : "#B0D9B1"}
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
              color={focused ? "#333333" : "#B0D9B1"}
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
              color={focused ? "#333333" : "#B0D9B1"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Ref"}
        component={BooksAndMovies}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bookshelf"
              size={24}
              color={focused ? "#333333" : "#B0D9B1"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Extra"}
        component={Extras}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="folder"
              size={24}
              color={focused ? "#333333" : "#B0D9B1"}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
