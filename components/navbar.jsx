// NavBar.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function NavBar({ onMenuPress, onClose }) {
  const [isActive, setActive] = useState(false);

  const handlePress = () => {
    // first toggle our local isActive state
    setActive(prev => !prev);
    // then call the passed‑in menu handler
    if (typeof onMenuPress === 'function') {
      onMenuPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navStyle}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.iconButton}
          accessibilityLabel="Menu toggle"
        >
          {isActive ? (
            <Image
              style={styles.logo} onPress={onClose}
              source={require('../assets/images/icons8-back-100.png')}
            />
          ) : (
            <>
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
            </>
          )}
        </TouchableOpacity>
        {/* you can put other nav items here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  navStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    alignSelf: 'flex-start',
  },
  hamburgerLine: {
    width: 24,
    height: 2,
    backgroundColor: '#000',
    marginVertical: 2,
  },
  logo: {
    width: 30,      // must be numbers, not strings
    height: 30,
    zIndex: 111,
    resizeMode: 'contain',
  },
});
