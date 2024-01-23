import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles/styles.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);

  const sendMessage = async () => {
    if (message.trim() !== "") {
      const userMessage = { text: message, type: "user" };
      setMessagesList([...messagesList, { text: message, type: "user" }]);
      const question = message;
      const encodedMessage = encodeURIComponent(message);
      setMessage("");
      try {
        const response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=APi_KEY",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: {
                text: `Answer my question as David Goggins: \n${encodedMessage}`,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (
          data.candidates &&
          data.candidates.length > 0 &&
          data.candidates[0].output
        ) {
          const outputText = data.candidates[0].output;

          setMessagesList([
            ...messagesList,
            { text: `${question}`, type: "user" },
            { text: `${outputText}`, type: "bot" },
          ]);
        }

        if (
          data.candidates &&
          data.candidates.length > 0 &&
          data.candidates[0].output
        ) {
          const outputText = data.candidates[0].output;

          const botMessages = [
            { text: `${question}`, type: "user" },
            { text: `${outputText}`, type: "bot" },
          ];

          setMessagesList([...messagesList, ...botMessages]);

          // Save the entire conversation in AsyncStorage
          const savedMessages = [...messagesList, ...botMessages];
          await AsyncStorage.setItem(
            "savedConversation",
            JSON.stringify(savedMessages)
          );
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  useEffect(() => {
    const retrieveSavedConversation = async () => {
      try {
        const savedConversation = await AsyncStorage.getItem(
          "savedConversation"
        );
        if (savedConversation !== null) {
          setMessagesList(JSON.parse(savedConversation));
        }
      } catch (error) {
        console.error(
          "Error retrieving conversation from AsyncStorage:",
          error
        );
      }
    };

    retrieveSavedConversation();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Image
        source={require("../../assets/inventory.jpg")}
        style={styles.backgroundImage}
      />

      <View style={styles.subsection}>
        <Text style={styles.subheading}>Boat Crew II Chat</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            flex: 1,
            marginBottom: 100,
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <FlatList
            data={messagesList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              if (item.type === "user") {
                return (
                  <View
                    style={[
                      stylesTwo.userMessageContainer,
                      { alignSelf: "flex-end" },
                    ]}
                  >
                    <Text style={stylesTwo.messageText}>{item.text}</Text>
                  </View>
                );
              } else if (item.type === "bot") {
                return (
                  <View
                    style={[
                      stylesTwo.botMessageContainer,
                      { alignSelf: "flex-start" },
                    ]}
                  >
                    <Text style={stylesTwo.messageText}>{item.text}</Text>
                  </View>
                );
              }
              return null;
            }}
          />
        </View>
        <View
          style={[
            styles.marginTopText,
            {
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "#000000",
            },
          ]}
        >
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 8,
              color: "white",
            }}
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholder="Type your message..."
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          ></TextInput>
          <TouchableOpacity onPress={sendMessage}>
            <FontAwesome
              name="send"
              size={24}
              color="white"
              style={{
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const stylesTwo = StyleSheet.create({
  userMessageContainer: {
    backgroundColor: "#009688",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
    maxWidth: "70%",
  },

  botMessageContainer: {
    backgroundColor: "#202c33",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
    maxWidth: "70%",
  },

  messageText: {
    color: "white",
    fontSize: 16,
  },
});
