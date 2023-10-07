// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0E68C",
  },
  header: {
    backgroundColor: "#F0E68C",
    textAlign: "center",
    fontVariant: "bold",
    color: "#F0E68C",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#F0E68C",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#F0E68C",
    paddingTop: 30,
  },
  text: {
    color: "#F0E68C",
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
    color: "#F0E68C",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: -10,
  },
  text: {
    color: "#F0E68C",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
  },
  subsection: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "space-around",
    flex: 1,
    backgroundColor: "#000000",
  },
  subheading: {
    color: "#F0E68C",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    marginTop: -10,
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
    backgroundColor: "#F0E68C",
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
    color: "#000000",
    textAlign: "center",
  },
  marginTopText: {
    color: "#F0E68C",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  checkboxLabel: {
    marginLeft: 10,
    color: "#F0E68C",
    fontSize: 16,
  },
});
