import React, {useState} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  Pressable,
  LayoutChangeEvent,
} from 'react-native';
import useAnimateItemStyle from '../hook/useAnimateItemStyle';
import useThemeColors from '../hook/useThemeColors';
import Arrow from '../assets/icons/arrow.svg';

type Props = {
  title: string;
  norm: {age: string; emptyStomach: string; afterMeal: string}[];
};

const ItemAnimate = ({item}: {item: Props}) => {
  const colors = useThemeColors();
  const [viewHeight, setViewHeight] = useState(46);
  const {onPress, height, animatedRotate} = useAnimateItemStyle();

  const onLayout = (event: LayoutChangeEvent) => {
    setViewHeight(event.nativeEvent.layout.height);
  };

  return (
    <Animated.View
      style={[
        styles.items,
        {
          height,
          borderColor: colors.border,
          maxHeight: viewHeight + 20,
          // backgroundColor,
        },
      ]}>
      <View onLayout={onLayout}>
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
          <View style={[styles.row, {backgroundColor: colors.bgText}]}>
            <Text
              style={[
                styles.item1,
                styles.itemTitle,
                {
                  color: colors.text,
                },
              ]}>
              Вік
            </Text>
            <Text
              style={[
                styles.item2,
                styles.itemTitle,
                {
                  color: colors.text,
                },
              ]}>
              Натще
            </Text>
            <Text
              style={[
                styles.item2,
                styles.itemTitle,
                {
                  color: colors.text,
                },
              ]}>
              Через 1-2 години після їжі
            </Text>
          </View>
          {item.norm.map((el, key) => {
            const isOdd = key % 2 !== 0;
            return (
              <View
                style={[
                  styles.row,
                  isOdd
                    ? {
                        backgroundColor: colors.bgText,
                      }
                    : null,
                ]}
                key={key}>
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
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  items: {
    minHeight: 46,
    width: '100%',
    paddingVertical: 10,
    borderRadius: 23,
    borderWidth: 1,
    marginBottom: 10,
    overflow: 'hidden',
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 10,
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
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  item1: {
    width: '25%',
    fontSize: 14,
  },
  item2: {
    width: '35%',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
});

export default ItemAnimate;
