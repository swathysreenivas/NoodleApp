import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../themes';
const {width, height} = Dimensions.get('window');
const imageHeight = height / 4;
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingBottom: 100,
    backgroundColor: colors.white,
    marginTop: imageHeight,
  },
  topContainer: {
    marginBottom: 10,
    position: 'absolute',
    // zIndex: 0,
  },
  imageStyle: {
    width: width,
    height: imageHeight,
    backgroundColor: colors.grey,
    alignSelf: 'center',
  },
  ratingContainer: {
    width: 60,
    position: 'absolute',
    bottom: 10,
    right: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 10,
  },
});
