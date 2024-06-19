import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GridItem from "./components/griditem";

export default function TabTwoScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/sky.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.topSection}>
        <Image
          source={require("../assets/images/firstb.png")}
          style={styles.logo}
        />

        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>

      <View style={styles.middleSection}>
        <Text style={styles.gridheader}>
          <Text style={styles.italics}>First</Text>Mobile
        </Text>
        <View style={styles.middleSection}>
          <GridItem
            text="Not a FirstBank customer?"
            iconName="arrow-right"
            heading="OPEN ACCOUNT"
          />
          <GridItem
            text="Create Account"
            iconName="arrow-right"
            heading="OPEN ACCOUNT"
          />
          <GridItem text="Help" iconName="arrow-right" heading="OPEN ACCOUNT" />
        </View>
        <Text style={styles.help}>NEED HELP?</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.versionText}>
          VERSION 2.10.1 - ANDROID 7.1 SM-G965N
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
  },
  logo: {
    width: 320,
    height: 300,
    resizeMode: "contain",
  },
  middleSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  bottomSection: {
    alignItems: "center",
    marginTop: 50,
  },
  versionText: {
    color: "white",
    fontSize: 12,
  },
  gridheader: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    paddingVertical: 16,
  },
  italics: {
    fontStyle: "italic",
  },
  help: {
    color: "white",
    fontSize: 16,
    paddingVertical: 16,
    fontWeight: "500",
  },
});
