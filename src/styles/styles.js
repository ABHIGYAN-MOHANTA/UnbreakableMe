// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontVariant: "bold",
    color: "#ffffff",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
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
  text: {
    color: "#ffffff",
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
    backgroundColor: "#000000",
  },
  subheading: {
    color: "#ffffff",
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
    backgroundColor: "#ffffff",
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
    color: "#ffffff",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  checkboxLabel: {
    marginLeft: 10,
    color: "#ffffff",
    fontSize: 16,
  },
});
