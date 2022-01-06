import {StyleSheet} from 'react-native';
import {colors} from '../../../themes';
import {fontSize} from '../../../themes/fonts';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  infoContainer: {
    padding: 10,
    backgroundColor: colors.lightGrey,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  headStyle: {
    fontSize: fontSize.small,
    fontWeight: 'bold',
    color: colors.black,
  },
  textStyle: {
    fontSize: fontSize.small,
    color: colors.greyText,
  },
});
