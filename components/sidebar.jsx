// Sidebar.js
import { useState } from 'react';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const MENU_ITEMS = ['Home', 'Products', 'About', 'Contact', 'FAQs'];
const SIDEBAR_WIDTH = Math.round(Dimensions.get('window').width * 0.75);


export default function Sidebar({ visible, onItemPress }) {
  if (!visible) return null;

  const handlePress = () => {
    // first toggle our local isActive state
    isActive((prev) => !prev);
    // then call the passed‑in menu handler
    if (typeof onMenuPress === 'function') {
      onMenuPress();
    }
  };

  return (
    <TouchableOpacity style={styles.overlay} onPress={handlePress}>
      <TouchableOpacity style={styles.sidebar}>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => onItemPress(item)}
            style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 16,
    elevation: 6,
  },
  // closeButton: {
  //   alignSelf: 'flex-end',
  //   padding: 8,
  //   zIndex: 1111111,
  // },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 18,
  },
});
