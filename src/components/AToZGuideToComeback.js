import React from "react";
import { SafeAreaView, ScrollView, View, Text, FlatList } from "react-native";
import { styles } from "../styles/styles.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DATA = [
  { text: "Find out why you failed in the first place" },
  { text: "Realize you are not as Bad or as Good as you Think you are" },
  { text: "Be prepared for the crap to hit again" },
  {
    text: "Get Back into it! When you get hit in the face. Go for another so you don't fear it all your life!",
  },
  { text: "Get back in the field but don't rush too much" },
  { text: "Don't let failures define you" },
  { text: "Seek counsel from the Right Source" },
  { text: "Read Comeback Stories and Watch Comeback Movies" },
  { text: "Remember: Every Setback is a setup for a Comeback!" },
];
const Item = (props) => {
  const { text } = props;

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text}>
          {
            <MaterialCommunityIcons
              name="star-four-points"
              size={24}
              color="#F6F6F6"
            />
          }{" "}
          {text}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const AToZGuideToComeback = () => {
  const renderItem = ({ item }) => <Item text={item.text} />;
  return (
    <View style={styles.subsection}>
      <Text style={styles.subheading}>The A to Z Guide to Comeback</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.text}
      />
    </View>
  );
};

export default AToZGuideToComeback;
