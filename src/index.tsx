import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {LevelContext} from './context/LevelContext';
import useThemeColors from './hook/useThemeColors';
import Converter from './components/Converter';
import Scale from './components/Scale';
import Description from './components/Description';

export default () => {
  const colors = useThemeColors();
  const [level, setLevel] = useState(0);

  return (
    <LevelContext.Provider value={{level, setLevel}}>
      <SafeAreaView
        style={[styles.container, {backgroundColor: colors.background}]}>
        <StatusBar
          barStyle={colors.theme === 'light' ? 'dark-content' : 'light-content'}
          backgroundColor={colors.background}
        />

        <ScrollView style={styles.scroll}>
          <Converter />
          <Scale />
          <Description />
        </ScrollView>
      </SafeAreaView>
    </LevelContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  scroll: {
    // flex: 1,
  },
});
