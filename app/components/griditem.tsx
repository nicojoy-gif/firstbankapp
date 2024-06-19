import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface GridItemProps {
  text: string;
  iconName: keyof typeof Ionicons.glyphMap;
}

const GridItem: React.FC<GridItemProps> = ({ text, iconName }) => {
  return (
    <View style={styles.container}>
        <View></View>
      <Text style={styles.text}>{text}</Text>
      <Ionicons name={iconName} size={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370, // Width reduced to accommodate horizontal margins
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%', // Margin on the sides
    marginVertical: 10, // Margin on top and bottom
    backgroundColor: '#000038',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
});

export default GridItem;
