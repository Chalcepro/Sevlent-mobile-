import { Tabs } from 'expo-router';
import React from 'react';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';


const _layout = () => {
    const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('../../assets/fonts/Rubik/Rubik-Regular.ttf'),
    'Rubik-Medium': require('../../assets/fonts/Rubik/Rubik-Medium.ttf'),
    'Rubik-Bold': require('../../assets/fonts/Rubik/Rubik-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarStyle: { display: 'none' }, // optional: hide bottom tab if needed
          tabBarLabelStyle: { display: 'none' }, // optional
        }}
      />
    </Tabs>
  );
};

export default _layout;
