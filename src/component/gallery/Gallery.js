import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

export const Gallery = () => {
  const route = useRoute();
  


  return (
    <View style={styles.galleryContainer}>
      <Text style={styles.title}>Gallery</Text>
      <Image style={styles.img} source={{uri: route.params.data}} />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20
  },
  img: {
    width: 200,
    height: 200,
  },
});
