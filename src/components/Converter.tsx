import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {LevelContext} from '../context/LevelContext';
import Separator from './Separator';
import useThemeColors from '../hook/useThemeColors';
import SVGImage from '../assets/icons/arrow-right-arrow-left.svg';

const Converter: React.FC = () => {
  const colors = useThemeColors();
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [changePosition, setChangePosition] = useState(false);
  const {setLevel} = useContext(LevelContext);

  const onChangeFirstValue: (value: string) => void = value => {
    if (isNaN(Number(value)) || value === '') {
      setFirstValue('');
      setSecondValue('');
      setLevel(0);
    } else {
      setFirstValue(value);
      const val = Math.round((+value / 18 + Number.EPSILON) * 10) / 10;
      setSecondValue('' + val);
      setLevel(+value > 270 ? 270 : +value);
    }
  };

  const onChangeSecondValue: (value: string) => void = value => {
    if (isNaN(Number(value)) || value === '') {
      setSecondValue('');
      setFirstValue('');
      setLevel(0);
    } else {
      setSecondValue(value);
      const val = Math.round((+value * 18 + Number.EPSILON) * 10) / 10;
      setFirstValue('' + val);
      setLevel(val > 270 ? 270 : val);
    }
  };

  const onPress = () => {
    setChangePosition(!changePosition);
  };

  const inputBlock = (num: boolean) => {
    return (
      <View>
        <View style={styles.inputBlock}>
          <TextInput
            style={[styles.input, {color: colors.text}]}
            onChangeText={
              !num
                ? value => onChangeFirstValue(value)
                : value => onChangeSecondValue(value)
            }
            value={!num ? firstValue : secondValue}
            keyboardType="numeric"
            textAlign="right"
            maxLength={8}
            autoFocus={!num}
          />
          <Text
            style={[
              styles.label,
              {
                color: colors.text,
              },
            ]}>
            {!num ? 'мг/дл' : 'ммоль/л'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: colors.text,
          },
        ]}>
        Конвертор рівня цукру в крові
      </Text>
      <Separator />
      {inputBlock(changePosition ? true : false)}
      <View style={styles.pos}>
        <Separator />
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? colors.bgText : colors.background,
              borderColor: colors.text,
            },
            styles.btn,
          ]}
          onPress={onPress}>
          <SVGImage
            style={{
              transform: [{rotate: '90deg'}],
            }}
            fill={colors.text}
          />
        </Pressable>
      </View>
      {inputBlock(changePosition ? false : true)}
      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  inputBlock: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  pos: {
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    left: 40,
    top: -8,
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
  },
  input: {
    width: '100%',
    fontSize: 40,
    padding: 10,
  },
  label: {
    fontSize: 18,
    paddingBottom: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Converter;
