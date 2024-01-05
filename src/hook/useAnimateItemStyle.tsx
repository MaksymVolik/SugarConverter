import {useState, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import useThemeColors from './useThemeColors';

const useAnimateItemStyle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = useThemeColors();

  const animate_state = {
    start: 0,
    end: 100,
  };
  const value = useRef(new Animated.Value(animate_state.start)).current;

  const onPress = () => {
    Animated.timing(value, {
      toValue: isOpen ? animate_state.start : animate_state.end,
      useNativeDriver: false,
      duration: 300,
      easing: Easing.exp,
    }).start();
    setIsOpen(!isOpen);
  };

  const inputRange = Object.values(animate_state);
  const height = value.interpolate({
    inputRange,
    outputRange: ['0%', '100%'],
  });
  const rotate = value.interpolate({
    inputRange,
    outputRange: ['90deg', '-90deg'],
  });

  const animatedRotate = {
    transform: [
      {
        rotate: rotate,
      },
    ],
  };

  const backgroundColor = value.interpolate({
    inputRange,
    outputRange: [colors.background, colors.bgText],
  });

  return {height, backgroundColor, animatedRotate, onPress};
};

export default useAnimateItemStyle;
