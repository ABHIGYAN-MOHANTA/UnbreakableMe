// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontVariant: "bold",
    color: "#000000",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#181D31",
    paddingTop: 30,
  },
  text: {
    color: "#ffffff",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  subsection: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "space-around",
  },
  subheading: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    width: "80%", // Adjust the width as needed
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000000",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  input: {
    flex: 1,
    height: 60,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 4,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  sidetext: {
    backgroundColor: "#ffffff",
  },
});
