import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, TouchableOpacity, Linking } from 'react-native';

const { width } = Dimensions.get('window');

const courseData = [
  {
    id: '1',
    title: 'HTML',
    subtitle: 'Learn the fundamentals of web structure',
    imageSource: require('../assets/images/html.jpg'),
    url: 'https://github.com/Chalcepro/Sevlent',
  },
  {
    id: '2',
    title: 'CSS',
    subtitle: 'Master web styling and design',
    imageSource: require('../assets/images/css.jpg'),
    url: 'https://github.com/Chalcepro/Sevlent',
  },
  {
    id: '3',
    title: 'JavaScript',
    subtitle: 'Add interactivity to your websites',
    imageSource: require('../assets/images/js.jpg'),
    url: 'https://github.com/Chalcepro/Sevlent',
  },
];

const CourseCard = ({ title, subtitle, imageSource, url }) => {
  const handlePress = async () => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Don't know how to open URL: " + url);
      }
    } catch (error) {
      console.error("An error occurred: ", error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={0.7}>
      <ImageBackground
        source={imageSource}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.4)', 'transparent']}
          locations={[0, 0.6]}
          style={styles.gradientOverlay}
        />
        <View style={styles.textOverlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const OnDisplayImages = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {courseData.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          subtitle={course.subtitle}
          imageSource={course.imageSource}
          url={course.url}
        />
      ))}
    </ScrollView>
  );
};

const cardWidth = width * 0.878;
const cardHeight = cardWidth * 0.56;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 10,
  },
  container: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    padding: 0,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  textOverlay: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#eee',
  },
});

export default OnDisplayImages;