// import {Platform, PlatformColor, ColorValue} from 'react-native';

// const bg: ColorValue =
//   Platform.OS === 'android'
//     ? PlatformColor('?android:color/background_light')
//     : '#F3F3F3';
// color:

// ...Platform.select({
//   android: {
//     color: PlatformColor('?android:attr/colorForeground'),
//     // backgroundColor: PlatformColor('@android:color/background'),
//   },
//   default: {color: 'black'},
// }),

// export const white = '#FDFFFC';

const Themes = {
  light: {
    theme: 'light',
    text: '#000',

    background: '#F3F3F3',

    bgText: 'lightgrey',
    border: '#444',

    arrFill: '#FFF',
    arrBg: '#6F737B',
  },
  dark: {
    theme: 'dark',
    text: '#FFF',

    background: '#222',
    bgText: '#61677A',
    border: '#DAE1E7',

    arrFill: '#000',
    arrBg: '#F3F3F3',
  },
};

export default Themes;
