import React, { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import { typography } from '../../styles/globalStyles';


import Header from '../../components/logoHeader';
import Sidebar from '../../components/sidebar';
import DiplayImages from '../../components/onDisplayImage';
import Accordian from '../../components/accordian';
import Sponsors from '../../components/sponsors';
import Offers from '../../components/offers';
// import ContactUs from '../../components/contactUs';
import MiniContacts from '../../components/miniContacts';
import Frames from '../../components/frames';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight || 0;

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible(v => !v);
  const handleItemPress = item => {
    console.log('Navigate to', item);
    setSidebarVisible(false);
  };

  return (

      <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.hero}>
          <View style={styles.framesBoundary}>
            <Frames />
          </View>
          <View style={styles.overlay}>
            <Text style={styles.title}>Sevlent</Text>
            <Text style={styles.subtitle}>
        Master HTML, CSS & JS with hands-on tutorials and instant feedback.
            </Text>
          </View>
          </View>

        {/* Main Content */}
        <View style={styles.mainSection}>
          <View style={styles.contentColumn}>
            <DiplayImages />
          </View>
        </View>

        {/* About Us */}
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>About Us</Text>
          <Accordian title="Our Vision">
            <Text>Develop unique applications to solve world challenges</Text>
          </Accordian>
          <Accordian title="Our Mission">
            <Text>Create reliable and innovative solutions using industry standards</Text>
          </Accordian>
          <Accordian title="Our Motto">
            <Text>Problem Solving | Integrity | Reliability | Commitment | Team-Spirit</Text>
          </Accordian>
        </View>

        {/* Sponsors & Offers */}
        <View style={styles.bottomSection}>
          {/* <Sponsors horizontal /> */}
          <Offers />
        </View>

        {/* Contact */}
        <View style={styles.contactSection}>
          {/* <ContactUs /> */}
          <MiniContacts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000', // Changed from '#fff' to '#000'
  },
  sidebarWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 998,
    elevation: 998,
  },
  scrollContent: {
    paddingTop: 0,
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  hero: {
    height: SCREEN_HEIGHT - STATUSBAR_HEIGHT,
    width: '100%',
    overflow: 'hidden',
  },
  heroImage: {
    flex: 1,
    justifyContent: 'center',
  },
  framesBoundary: {
    height: '100vh',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: typography.bold,
    fontSize: 60,
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: typography.regular,
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 16,
  },
  mainSection: {
    background: 'url: ""',
    padding: 16,
  },
  contentColumn: {
    flexDirection: 'column',
    rowGap: 20,
  },
  about: {
    backgroundColor: 'black',
    padding: 20,
  },
  aboutTitle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  bottomSection: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  contactSection: {
    padding: 0, // Clean bottom space
  },
});

