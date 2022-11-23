import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  const name = 'ERIC';

  return (
    <View>
      <Text style={styles.textStyle}>Image Screen</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      <ImageDetail title="forest" imageSource={require('../../assets/forest.jpg')} imageScore="1"/>
      <ImageDetail title="beach"imageSource={require('../../assets/beach.jpg')} imageScore="5"/>
      <ImageDetail title="a slice of pepperoni pizza with extra cheese" imageSource={require('../../assets/mountain.jpg')} imageScore="10"/>

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ImageScreen;
