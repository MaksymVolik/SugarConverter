import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {LevelContext} from '../context/LevelContext';
import Separator from './Separator';
import useThemeColors from '../hook/useThemeColors';

const Converter: React.FC = () => {
  const colors = useThemeColors();
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
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
      <View>
        <View style={styles.inputBlock}>
          <TextInput
            style={[styles.input, {color: colors.text}]}
            onChangeText={value => onChangeFirstValue(value)}
            value={firstValue}
            keyboardType="numeric"
            textAlign="right"
            maxLength={8}
            autoFocus={true}
          />
          <Text
            style={[
              styles.label,
              {
                color: colors.text,
              },
            ]}>
            мг/дл
          </Text>
        </View>
      </View>
      <Separator />
      <View>
        <View style={styles.inputBlock}>
          <TextInput
            style={[styles.input, {color: colors.text}]}
            onChangeText={value => onChangeSecondValue(value)}
            value={secondValue}
            keyboardType="numeric"
            textAlign="right"
            maxLength={8}
          />
          <Text
            style={[
              styles.label,
              {
                color: colors.text,
              },
            ]}>
            ммоль/л
          </Text>
        </View>
      </View>
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
