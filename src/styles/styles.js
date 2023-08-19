// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0E9D2",
  },
  header: {
    backgroundColor: "#F0E9D2",
    textAlign: "center",
    fontVariant: "bold",
    color: "#F0E9D2",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#F0E9D2",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#F0E9D2",
    paddingTop: 30,
  },
  text: {
    color: "#F0E9D2",
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
    color: "#F0E9D2",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    color: "#F0E9D2",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  subsection: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "space-around",
    flex: 1,
    backgroundColor: "#272829",
  },
  subheading: {
    color: "#F0E9D2",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
  },
  footer: {
    justifyContent: "flex-end",
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
  },
  button: {
    backgroundColor: "#F0E9D2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#272829",
    textAlign: "center",
  },
  marginTopText: {
    color: "#F0E9D2",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
