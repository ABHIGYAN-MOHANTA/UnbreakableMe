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
    color: "#272829",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#F0E9D2",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#181D31",
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
});
