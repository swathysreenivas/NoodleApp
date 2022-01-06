import {StyleSheet} from 'react-native';
import {colors} from '../../../../themes';
import {fontSize} from '../../../../themes/fonts';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: colors.grey,
  },
  infoContainer: {
    padding: 10,
    flex: 1,
  },
  infoContainer1: {
    flex: 0.8,
    marginRight: 10,
  },

  spaceBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameStyle: {
    fontSize: fontSize.average,
    color: colors.black,
    fontWeight: 'bold',
  },
  companyNameStyle: {
    fontSize: fontSize.small,
    color: colors.greyText,
  },
});
