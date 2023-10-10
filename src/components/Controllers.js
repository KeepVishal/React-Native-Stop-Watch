import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {colors} from '../utilities/style';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function Controllers({
  isRunning,
  start,
  lap,
  stop,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => stop()}
      style={[styles.buttonContainer, {backgroundColor: colors.color4}]}>
        <Icons name="stop" color={'#fff'} size={15} />
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => start()}
      style={[styles.buttonContainer, {backgroundColor: colors.color2}]}>
        <Icons
          name={isRunning ? 'pause' : 'play'}
          color={colors.color3}
          size={15}
        />
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => lap()}
      style={[styles.buttonContainer, {backgroundColor: colors.color4}]}>
        <Icons name="step-forward" color={'#fff'} size={15} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: windowWidth - 100,
  },
  buttonContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    //backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
