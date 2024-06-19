import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GridItem from './components/griditem';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* Top section with logo and icon */}
      <View style={styles.topSection}>
      <Image source={require('../assets/images/firstb.png')} style={styles.logo} />

      <Ionicons name="notifications-outline" size={24} color="white" />
      </View>

      {/* Middle section with 3 grid items */}
      <View style={styles.middleSection}>
        <Text style={styles.gridheader}>
            <Text style={styles.italics}>First</Text>Mobile</Text>
      <View style={styles.middleSection}>
        <GridItem text="Not a FirstBank customer?" iconName="arrow-right"  heading='OPEN ACCOUNT'/>
        <GridItem text="Create Account" iconName="arrow-right" heading='OPEN ACCOUNT' />
        <GridItem text="Help" iconName="arrow-right" heading='OPEN ACCOUNT' />
      </View>
      <Text style={styles.help}>NEED HELP?</Text>
</View>
      {/* Bottom section with version text */}
      <View style={styles.bottomSection}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6', // Blue background
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30
   
  },
  logo: {
    width: 320,
    height: 300,
    resizeMode: 'contain', // Ensures the logo maintains aspect ratio
  },
  middleSection: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: 50,
  },
  versionText: {
    color: 'white',
    fontSize: 16,
  },
  gridheader: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    paddingVertical: 16
  },
  italics: {
    fontStyle:'italic'
  },
  help: {
    color:'white',
    fontSize: 20,
    paddingVertical: 16
  }
});
