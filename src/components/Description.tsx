import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import useThemeColors from '../hook/useThemeColors';
import ItemAnimate from './ItemAnimate';

import norm from '../norm.json';
import Separator from './Separator';

const Description = () => {
  const data = norm.data;
  const colors = useThemeColors();

  return (
    <View style={styles.container}>
      <Separator />
      <Text
        style={[
          styles.sectionTitle,
          {
            color: colors.text,
          },
        ]}>
        Норма цукру в крові
      </Text>
      {data.map((item, key) => {
        return <ItemAnimate item={item} key={key} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 10,
  },
});

export default Description;
