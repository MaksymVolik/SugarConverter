import React from 'react';
import {Animated, StyleSheet, View, Text, Pressable} from 'react-native';
import useAnimateItemStyle from '../hook/useAnimateItemStyle';
import useThemeColors from '../hook/useThemeColors';
import Arrow from '../assets/icons/arrow.svg';

type Props = {
  title: string;
  height: number;
  norm: {age: string; emptyStomach: string; afterMeal: string}[];
};

const ItemAnimate = ({item}: {item: Props}) => {
  const colors = useThemeColors();
  const {onPress, height, backgroundColor, animatedRotate} =
    useAnimateItemStyle(item.height);

  return (
    <Animated.View
      style={[
        styles.items,
        {
          height,
          backgroundColor,
        },
      ]}>
      <View style={styles.titleBlock}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          {item.title}
        </Text>
        <Pressable onPress={onPress}>
          <Animated.View
            style={[
              styles.arrow,
              animatedRotate,
              {
                backgroundColor: colors.arrBg,
              },
            ]}>
            <Arrow fill={colors.arrFill} />
          </Animated.View>
        </Pressable>
      </View>
      <View style={styles.descr}>
        <View style={styles.row}>
          <Text
            style={[
              styles.item1,
              {
                color: colors.text,
              },
            ]}>
            Вік
          </Text>
          <Text
            style={[
              styles.item2,
              {
                color: colors.text,
              },
            ]}>
            Натще
          </Text>
          <Text
            style={[
              styles.item2,
              {
                color: colors.text,
              },
            ]}>
            Через 1-2 години після їжі
          </Text>
        </View>
        {item.norm.map((el, key) => {
          return (
            <View style={styles.row} key={key}>
              <Text
                style={[
                  styles.item1,
                  {
                    color: colors.text,
                  },
                ]}>
                {el.age}
              </Text>
              <Text
                style={[
                  styles.item2,
                  {
                    color: colors.text,
                  },
                ]}>
                {el.emptyStomach}
              </Text>
              <Text
                style={[
                  styles.item2,
                  {
                    color: colors.text,
                  },
                ]}>
                {el.afterMeal}
              </Text>
            </View>
          );
        })}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  items: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'grey',
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  descr: {
    marginTop: 20,
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  item1: {
    width: '26%',
    fontSize: 14,
  },
  item2: {
    width: '34%',
  },
});

export default ItemAnimate;
