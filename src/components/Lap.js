import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utilities/style';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function Lap({results}) {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = milliseconds => {
    let minutes = 0;
    let seconds = 0;

    if (milliseconds < 0) {
      milliseconds = 0;
    }

    let remainMilliseconds = milliseconds % 100;
    seconds = (milliseconds - remainMilliseconds) / 100;

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(
      remainMilliseconds,
    )}`;

    //
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lap Time</Text>
        <Text style={styles.titleText}>Lap No.</Text>
      </View>
      <FlatList
        data={results}
        renderItem={item => {
          //console.log(item);
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '90%',
                marginVertical: 10,
              }}>
              <Text style={{color: colors.color5}}>{displayTime(item.item)}</Text>
              <Text style={{color: colors.color5}}>{results.length - item.index}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: colors.color4,
    paddingVertical: 10,
  },
  titleText: {
    color: colors.color5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
