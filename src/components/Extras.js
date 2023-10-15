import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "../styles/styles.js";
import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuoteDisplay from "./QuoteDisplay.js";

const Extras = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [checkboxStates, setCheckboxStates] = React.useState({
    pray: false,
    workout: false,
    toDoList: false,
    gratitude: false,
    reflection: false,
  });

  const resetCheckboxes = () => {
    const newCheckboxStates = {
      pray: false,
      workout: false,
      toDoList: false,
      gratitude: false,
      reflection: false,
    };

    saveCheckboxState(newCheckboxStates);
    setCheckboxStates(newCheckboxStates);
  };

  async function playSound() {
    if (sound) {
      // If audio is already playing, stop it
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    } else {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/persistence.mp3")
      );
      setSound(sound);
      setIsPlaying(true);

      await sound.playAsync();
    }
  }

  useEffect(() => {
    loadCheckboxState();
  }, []);

  const loadCheckboxState = async () => {
    try {
      const savedCheckboxState = await AsyncStorage.getItem("checkboxState");
      if (savedCheckboxState) {
        setCheckboxStates(JSON.parse(savedCheckboxState));
      }
    } catch (error) {
      console.error("Error loading checkbox state:", error);
    }
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxStates((prevStates) => {
      const updatedStates = {
        ...prevStates,
        [checkboxName]: !prevStates[checkboxName],
      };
      saveCheckboxState(updatedStates);
      return updatedStates;
    });
  };

  const saveCheckboxState = async (checkboxState) => {
    try {
      await AsyncStorage.setItem(
        "checkboxState",
        JSON.stringify(checkboxState)
      );
    } catch (error) {
      console.error("Error saving checkbox state:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#000000",
      }}
    >
      <View style={styles.subsection}>
        <Text style={styles.subheading}>Extras</Text>
        <Text style={styles.marginTopText}>
          Have a professional mindset! Imagine a doctor, who has to do a
          surgery, but he is procrastinating because he doesn't feel like doing
          it! It's pretty hard to imagine, isn't it! Similarly, you have things
          to do, so no matter how you feel, get them done!
        </Text>
        <TouchableOpacity style={styles.button} onPress={playSound}>
          <Text style={styles.buttonText}>
            {isPlaying ? "Stop Playing Audio" : "Play The Persistence Speech"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.marginTopText}>
          Fail better! "Don't associate failure with inadequacy. Embrace failure
          as a testament to your commitment. When your best effort paves the
          way, a sense of fulfillment follows even in failure. However, failing
          due to withheld potential lingers as regret, a reminder that you
          possessed the capacity to excel but chose otherwise."
        </Text>
        <Text style={styles.text}>
          PROCESS ISSUES - if there's one thing I want you to get from all this
          is “learn how to process issues”
        </Text>
        <Text style={styles.text}>
          Last but not least: Workout everyday, you need to lose sweat, to flush
          all the junk in your body! Don't be a perfectionist! Have a growth
          mindset! Organize your workplace! Set deadlines (Parkinson's Law)!
          Have a To-do list, practice gratitude, and an end of the day
          reflection diary! Fill these in solitude if possible, where you can
          have your Me Time, for your deep thoughts. However, don't spend much
          time being a philosopher, because you have your other
          responsibilities! And always thank God, for all the experiences you
          had in your life! He always has a bigger plan for you! Cheers!
        </Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxLabel}>
              Did you pray today?· · · · · · · · · · · · · ·
            </Text>
            <Checkbox
              value={checkboxStates.pray}
              onValueChange={() => handleCheckboxChange("pray")}
              color={checkboxStates.pray ? "#4A4A4A" : undefined}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxLabel}>
              Did you Workout today? · · · · · · · · · ·
            </Text>
            <Checkbox
              value={checkboxStates.workout}
              onValueChange={() => handleCheckboxChange("workout")}
              color={checkboxStates.workout ? "#4A4A4A" : undefined}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxLabel}>
              Did you make a to-do list today? · · ·
            </Text>
            <Checkbox
              value={checkboxStates.toDoList}
              onValueChange={() => handleCheckboxChange("toDoList")}
              color={checkboxStates.toDoList ? "#4A4A4A" : undefined}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxLabel}>
              Did you practice gratitude today? · ·
            </Text>
            <Checkbox
              value={checkboxStates.gratitude}
              onValueChange={() => handleCheckboxChange("gratitude")}
              color={checkboxStates.gratitude ? "#4A4A4A" : undefined}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxLabel}>
              Did you reflect on today?· · · · · · · · · ·
            </Text>
            <Checkbox
              value={checkboxStates.reflection}
              onValueChange={() => handleCheckboxChange("reflection")}
              color={checkboxStates.reflection ? "#4A4A4A" : undefined}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, { marginVertical: 20 }]}
          onPress={resetCheckboxes}
        >
          <Text style={styles.buttonText}>Reset Checkboxes</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.checkboxLabel}>Save your Personal Quotes Below!</Text>
      <QuoteDisplay />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => handleLinkPress("https://github.com/ABHIGYAN-MOHANTA")}
        >
          <FontAwesome name="github" size={30} color="#B0D9B1" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleLinkPress("https://twitter.com/MohantaAbhigyan")}
        >
          <FontAwesome name="twitter" size={30} color="#B0D9B1" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            handleLinkPress("https://www.linkedin.com/in/abhigyan-mohanta/")
          }
        >
          <FontAwesome name="linkedin" size={30} color="#B0D9B1" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handleLinkPress(
              "https://www.youtube.com/channel/UCNh2M7dsGe_iaho_JP-khCA"
            )
          }
        >
          <FontAwesome name="youtube" size={30} color="#B0D9B1" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLinkPress("https://abhigyan.start.page/")}
        >
          <FontAwesome name="globe" size={30} color="#B0D9B1" />
        </TouchableOpacity>
      </View>
      <Text></Text>
    </ScrollView>
  );
};

export default Extras;
