import React from 'react';
import { View, FlatList, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.5;
const CARD_HEIGHT = CARD_WIDTH * 1.4;

const DATA = [
  {
    id: '1',
    title: 'Web Development',
    subtitle: 'Build responsive websites & apps',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Counseling & Guidance',
    subtitle: 'Personal growth and career advice',
    image: 'https://images.unsplash.com/photo-1565229284535-2cbbe3049123?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Tutorials',
    subtitle: 'Step-by-step video lessons',
    image: 'https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    title: 'UI/UX Design',
    subtitle: 'Design beautiful interfaces',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    title: 'More Courses',
    subtitle: 'Explore all our offerings',
    image: 'https://images.unsplash.com/photo-1598978028953-799807c097b5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const OfferCard = ({ image, title, subtitle }) => (
  <View style={styles.cardContainer}>
    <ImageBackground
      source={{ uri: image }}
      style={styles.imageBackground}
      imageStyle={styles.imageStyle}
    >
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        locations={[0.5, 1]}
        style={styles.gradientOverlay}
      />
      <View style={styles.darkOverlay} />
      <View style={styles.textOverlay}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </ImageBackground>
  </View>
);

export default function Offers() {
  return (
    <View style={styles.mainInc}>
      <View style={styles.listWrapper}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <OfferCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          )}
        />
      </View>


        <View style={styles.offersInfoContainer}>
          <Text style={styles.offersInfoHeading}>
            Why Choose <Text style={styles.brandText}>Sevlent?</Text>
          </Text>
          <View style={styles.offersInfoList}>
            <View style={styles.bulletContainer}>
              <Text style={styles.bulletIcon}>◆</Text>
              <Text style={styles.offersInfoBullet}>Expert-Led Training</Text>
            </View>
            <View style={styles.bulletContainer}>
              <Text style={styles.bulletIcon}>◆</Text>
              <Text style={styles.offersInfoBullet}>Real-World Projects</Text>
            </View>
            <View style={styles.bulletContainer}>
              <Text style={styles.bulletIcon}>◆</Text>
              <Text style={styles.offersInfoBullet}>24/7 Support</Text>
            </View>
          </View>
          <Text style={styles.offersInfoFooter}>
            Start Your Journey Today!
          </Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainInc: {
    width: '100%',
    borderRadius: 16,
  },
  listWrapper: {
    width: '100%',
    overflow: 'hidden',
    paddingTop: 20,
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 15,            // space between cards
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  textOverlay: {
    padding: 12,
    backgroundColor: 'transparent',
  },
  cardTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 4,
  },
    darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
offersInfoContainer: {
  paddingVertical: 20,
  textAlign: 'center',
  borderRadius: 16,
  overflow: 'hidden',
  width: '90%',
  margin: 'auto',
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
},
offersInfoHeading: {
  fontSize: 28,
  fontWeight: '200',
  marginBottom: 12,
  textAlign: 'center',
color: '#fff',

},
offersInfoText: {
  fontSize: 16,
  color: '#555',
  marginBottom: 12,
  textAlign: 'center',
},
offersInfoList: {
  marginLeft: 8,
  marginBottom: 12,
},
offersInfoBullet: {
  fontSize: 17,
  fontWeight: '500',
  color: '#ECF0F1',
  margin: 'auto',
  width: '80%',
},
offersInfoFooter: {
  fontSize: 16,
  color: '#007AFF',   // or your brand’s accent color
  fontWeight: '600',
  textAlign: 'center',
},
 bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 7,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    width: '90%',
  },
  bulletIcon: {
    color: '#007AFF',
    fontSize: 12,
    marginRight: 12,
    opacity: 0.9,
  },
  offersInfoBullet: {
    fontSize: 17,
    fontWeight: '500',
    color: '#ECF0F1',
    flex: 1,
  },
  brandText: {
    color: 'white',
    fontWeight: '900',
  },
  offersInfoList: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
});
