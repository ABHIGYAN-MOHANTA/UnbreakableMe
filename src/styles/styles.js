// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8E4B2",
  },
  header: {
    backgroundColor: "#5B9A8B",
    textAlign: "center",
    fontVariant: "bold",
    color: "#C8E4B26E0",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#5B9A8B",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#C8E4B2",
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
  text: {
    color: "#C8E4B2",
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
    color: "#C8E4B2",
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
    backgroundColor: "#5B9A8B",
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
    color: "#C8E4B2",
    textAlign: "center",
  },
  marginTopText: {
    color: "#C8E4B2",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
