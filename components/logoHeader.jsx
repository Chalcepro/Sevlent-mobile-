import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>S</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,                     // a bit taller to give space
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',    // so the line sits at the bottom
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    borderBottomLeftRadius: 12,    // subtle rounding
    borderBottomRightRadius: 12,
    // Android elevation
    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
    }),
  },
  logoContainer: {
    position: 'absolute',
    top: 15,                        // vertically center in that extra space
    width: 64,
    height: 64,                     // make it a perfect circle
    borderRadius: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '900',
    color: '#15191f',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.12)',  // darker so you see it on white
  },
});
