import React, {useRef, useState, useCallback} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from '../utilities/style';
import Clock from './Clock';
import Lap from './Lap';
import Controllers from './Controllers';
export default function Home() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);

  const timer = useRef(null);

  const start = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime(previousTime => previousTime + 1);
      }, 10);
      timer.current = interval;
    }
    else {
      clearInterval(timer.current)
    }
     setIsRunning(previousState => !previousState);
  }, [isRunning]);

  const lap = useCallback(() => {
    if (isRunning) {
      setResults((previousState) => [...previousState,time])
    }
  }, [isRunning, time])

  const stop = useCallback(() => {
      setResults([]);
      setTime(0);
      clearInterval(timer.current);
    setIsRunning(false);
    
  }, [isRunning])

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{flex: 55}}>
        <Clock time={time} />
      </View>
      <View style={{flex: 32}}>
        <Lap results={results} />
      </View>
      <View style={{flex: 13}}>
        <Controllers 
        start= {start} 
        lap = {lap}
        stop = {stop}
        isRunning = {isRunning}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
