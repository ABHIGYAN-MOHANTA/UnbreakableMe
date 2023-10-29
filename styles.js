// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#B0D9B1",
    textAlign: "center",
    fontVariant: "bold",
    color: "#000000",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#B0D9B1",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000",
    paddingTop: 30,
  },
  text: {
    color: "#B0D9B1",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#00000080",
    borderRadius: 10,
    padding: 10,
  },
  subsection: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "space-around",
  },
  subheading: {
    color: "#B0D9B1",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: -10,
    backgroundColor: "#00000080",
    borderRadius: 10,
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#B0D9B1",
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
    backgroundColor: "#B0D9B1",
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
    borderColor: "#B0D9B1",
    borderRadius: 4,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    color: "#000000",
    backgroundColor: "#B0D9B1",
  },
  sidetext: {
    backgroundColor: "#B0D9B1",
  },
});
