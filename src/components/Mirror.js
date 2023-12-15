import { Camera, CameraType } from "expo-camera";
import Constants from "expo-constants";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Dimensions } from "react-native";
import NotesApp from "./NotesApp";

const windowWidth = Dimensions.get("window").width / 200;
const screenWidthFromConstants =
  Constants.platform === "ios"
    ? Constants.platform.ios.displayWidth
    : Constants.platform.android.displayWidth;
const screenHeightFromConstants =
  Constants.platform === "ios"
    ? Constants.platform.ios.displayHeight
    : Constants.platform.android.displayHeight;

export default function Mirror() {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your camera permission to show the mirror
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <NotesApp />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  camera: {
    // height: screenHeightFromConstants,
    width: screenWidthFromConstants,
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
