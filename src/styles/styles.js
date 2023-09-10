// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9966CC",
  },
  header: {
    backgroundColor: "#9966CC",
    textAlign: "center",
    fontVariant: "bold",
    color: "#9966CC",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#9966CC",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#9966CC",
    paddingTop: 30,
  },
  text: {
    color: "#9966CC",
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
    color: "#9966CC",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    color: "#9966CC",
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
    color: "#9966CC",
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
    backgroundColor: "#9966CC",
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
    color: "#9966CC",
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
    color: "#9966CC",
    fontSize: 16,
  },
});
