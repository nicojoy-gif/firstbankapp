import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface GridItemProps {
  text: string;
  iconName: keyof typeof FontAwesome5.glyphMap;
  heading: string;
}

const GridItem: React.FC<GridItemProps> = ({ text, iconName, heading }) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstgrid}>
        <View>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.yellowtext}>{heading}</Text>
        </View>
        <View style={styles.iconbg}>
          <FontAwesome5 name={iconName} size={30} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370, 
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "5%", 
    marginVertical: 10, 
    backgroundColor: "rgb(0, 0, 28)",

    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  text: {
    color: "white",
    fontSize: 12,
    paddingVertical: 4,
  },
  yellowtext: {
    color: "#F7A800",
    fontWeight: "600",
    paddingVertical: 4,
    fontSize: 15,
  },
  firstgrid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  iconbg: {
    backgroundColor: "rgba(255, 255, 255, .2)",
    width: 35,
    height: 35,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GridItem;
