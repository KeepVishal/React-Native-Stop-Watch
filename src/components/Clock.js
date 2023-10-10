import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../utilities/style';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function Clock({time}) {

  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = milliseconds => {
    let minutes = 0;
    let seconds = 0;

    if (milliseconds < 0) {
      milliseconds = 0;
    }

    if (milliseconds < 100) {
      return {
        minutes: '00',
        seconds: '00',
        miniseconds: padToTwo(milliseconds),
      };
    }

    let remainMilliseconds = milliseconds % 100;
    seconds = (milliseconds - remainMilliseconds) / 100;

    if (seconds < 60) {
      return {
        minutes: '00',
        seconds: padToTwo(seconds),
        miniseconds: padToTwo(remainMilliseconds),
      };
    }

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return {
      minutes: padToTwo(minutes),
      seconds: padToTwo(remainSeconds),
      miniseconds: padToTwo(remainMilliseconds),
    };

    //
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.roundContainer}>
        <Text style={{color: colors.color5}}>STOPWATCH</Text>
        <View style={styles.counterContainer}>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>{displayTime(time).minutes}</Text>
            <Text style={{color: colors.color3, opacity: 0.7}}>min</Text>
          </View>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>{displayTime(time).seconds}</Text>
            <Text style={{color: colors.color3, opacity: 0.7}}>sec</Text>
          </View>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>{displayTime(time).miniseconds}</Text>
            <Text style={{color: colors.color3, opacity: 0.7}}>msec</Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundContainer: {
    height: windowWidth - 120,
    width: windowWidth - 120,
    backgroundColor: colors.color4,
    borderRadius: windowWidth - 120,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  counterInnerContainer: {
    alignItems: 'center',
  },
  timeText: {
    color: colors.color5,
    fontSize: 30,
  },
});
