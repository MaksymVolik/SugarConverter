import React from 'react';
import {View, StyleSheet} from 'react-native';
import useThemeColors from '../hook/useThemeColors';

const Separator = () => {
  const colors = useThemeColors();

  return (
    <View
      style={[
        styles.separator,
        {
          borderBottomColor: colors.border,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Separator;
