// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7EAA92",
  },
  header: {
    backgroundColor: "#5B9A8B",
    textAlign: "center",
    fontVariant: "bold",
    color: "#C8E4B2",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#5B9A8B",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#2D4356",
    paddingTop: 30,
  },
  text: {
    color: "#C8E4B2",
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
    color: "#C8E4B2",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
});
