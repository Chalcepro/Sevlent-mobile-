import React from 'react';
import { View, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SPONSOR_SIZE = width * 0.2; // 20% of screen width
const SPONSOR_MARGIN = width * 0.08; // 2.5% margin

const DATA = [
  { id: '1', logo: require('../assets/images/fav.png') },
  { id: '2', logo: require('../assets/images/fav.png') },
  { id: '3', logo: require('../assets/images/fav.png') },
  { id: '4', logo: require('../assets/images/fav.png') },
  { id: '5', logo: require('../assets/images/fav.png') },
  // add more sponsor logos here
];

const SponsorItem = ({ logo }) => (
  <View style={styles.itemContainer}>
    <Image source={logo} style={styles.logo} resizeMode="contain" />
  </View>
);

const sponsors = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        horizontal 
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SponsorItem logo={item.logo} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
  },
  listContent: {
    paddingHorizontal: SPONSOR_MARGIN,
  },
  itemContainer: {
    width: SPONSOR_SIZE,
    height: SPONSOR_SIZE,
    marginHorizontal: SPONSOR_MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logo: {
    width: '80%',
    height: '80%',
  },
});

export default sponsors;
