import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

const miniContacts = () => {
  const makeLink = url => () => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>You can find us on:</Text>

      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={makeLink('https://instagram.com')}>
          <Image
            source={require('../assets/images/instagram.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={makeLink('https://facebook.com')}>
          <Image
            source={require('../assets/images/facebook.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={makeLink('https://twitter.com')}>
          <Image
            source={require('../assets/images/twitter.png')}
            style={styles.icon2}
          />
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity
        style={styles.row}
        onPress={makeLink('https://gamejolt.com')}
      >
        <Image
          source={require('../assets/images/gamejolt.png')}
          style={styles.smallIcon}
        />
      </TouchableOpacity> */}

      <View style={styles.numberView}>
        <Text style={styles.text}>+234 90 9822 091</Text>
        <Text style={styles.text}>sevIentMain@gmail.com</Text>
      </View>

      <TouchableOpacity
        style={styles.row}
        onPress={makeLink('https://pinterest.com')}
      >
        <Image
          source={require('../assets/images/pinterest.png')}
          style={styles.icon}
        />

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={makeLink('https://youtube.com')}
      >
        <Image
          source={require('../assets/images/youtube.png')}
          style={styles.icon}
        />
        {/* <Text style={styles.text}>Lincoln College</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
    flex: 1,
  },
  header: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  icon: {
    width: 60,
    height: 60,
    objectFit: 'cover',
  },
  icon2: {
    width: 60,
    height: 60,
    objectFit: 'cover',
    tintColor: '#ddd',
  },
  numberView: {
    gap: 10,
    flexDirection: 'column',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5 ,
  },
  smallIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default miniContacts;
