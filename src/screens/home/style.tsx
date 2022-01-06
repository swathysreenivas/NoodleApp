import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {fontSize} from '../../themes/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  head: {
    fontSize: fontSize.large,
    color: colors.blue,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  textInputContainer: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortIcon: {
    padding: 10,
  },
  sortIconStyle: {
    width: 20,
    height: 20,
  },
  sortView: {
    borderWidth: 1,
    borderColor: colors.green,
    width: 100,
    height: 30,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 6,
    marginRight: 15,
  },
});
