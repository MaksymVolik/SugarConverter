import React, {useEffect, useRef, useContext} from 'react';
import {View, StyleSheet, Dimensions, Animated, Easing} from 'react-native';
import {LevelContext} from '../context/LevelContext';
import useThemeColors from '../hook/useThemeColors';
import SVGimg from '../assets/icons/Blood_drop.svg';

const Scale = () => {
  const colors = useThemeColors();
  const width = Dimensions.get('window').width - 30;
  const {level} = useContext(LevelContext);

  const value = useRef(new Animated.Value(-12)).current;

  useEffect(() => {
    Animated.timing(value, {
      toValue: (level / 270) * width - 12,
      useNativeDriver: false,
      duration: 1000,
      easing: Easing.bounce,
    }).start();
  }, [level, value, width]);

  return (
    <View
      style={[
        styles.scale,
        {
          backgroundColor: colors.background,
          width: width,
        },
      ]}>
      <View style={[styles.low, {width: (69 / 270) * width}]} />
      <View style={[styles.normal, {width: (31 / 270) * width}]} />
      <View style={[styles.prediabetes, {width: (29 / 270) * width}]} />
      <View style={styles.diabetes} />
      <Animated.View style={[styles.pointer, {left: value}]}>
        <SVGimg width={24} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  scale: {
    position: 'relative',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 50,
    marginHorizontal: 15,
  },
  low: {
    height: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#47cbe9',
  },
  normal: {
    height: 20,
    backgroundColor: '#74df9a',
  },
  prediabetes: {
    height: 20,
    backgroundColor: '#dfc774',
  },
  diabetes: {
    flex: 1,
    height: 20,
    backgroundColor: '#e43e3a',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  pointer: {
    position: 'absolute',
    top: 10,
  },
});

export default Scale;
