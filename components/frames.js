import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Video } from 'expo-av';

export default function FrameAnimation() {
  const { width: screenWidth } = useWindowDimensions();
  const aspectRatio = 9 / 16;
  const videoHeight = screenWidth / aspectRatio;
  const videoRef = useRef(null);
  
  // Make sure to add your video file in the assets folder and update the path
  const videoSource = require("../assets/video/coding2.mp4");
  
  useEffect(() => {
    loadVideo();
    return () => {
      // Cleanup when component unmounts
      if (videoRef.current) {
        videoRef.current.unloadAsync();
      }
    };
  }, []);

  async function loadVideo() {
    try {
      if (videoRef.current) {
        await videoRef.current.loadAsync(videoSource, {}, false);
        await videoRef.current.playAsync();
        await videoRef.current.setIsLoopingAsync(true);
      }
    } catch (error) {
      console.error("Error loading video:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={[styles.video, { width: screenWidth, height: videoHeight }]}
        source={videoSource}
        resizeMode="cover"
        shouldPlay={true}
        isLooping={true}
        isMuted={true} // Add this if you want the video to be muted
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  video: {
    position: 'fixed',
    zIndex: 11111,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
  },
});