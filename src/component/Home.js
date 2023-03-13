import React, {useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const Home = ({navigation}) => {

  let options = {
    savedPhotos: true,
    mediaType: 'photo',
  };

    const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      navigation.navigate('Gallery', {data: result.assets[0].uri});
    }
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity onPress={openCamera} style={styles.cameraBtn}>
        <Text style={styles.txt}>Open Camera</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
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
  cameraBtn: {
    backgroundColor: '#1A45AF',
    width: 320,
    padding: 10,
  },
  gallery: {
    backgroundColor: '#1A45AF',
    width: 320,
    padding: 10,
    marginTop: 15,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlign: 'center',
  },
  camerImage: {
    width: 200,
    height: 200,
  },
});
