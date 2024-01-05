import useColorScheme from './useColorScheme';
import Colors from '../styles/Colors';

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  return colors;
};

export default useThemeColors;
