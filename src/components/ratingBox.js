import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors, Images} from '../themes';
import {fontSize} from '../themes/fonts';

type Props = {
  details: any,
  containerStyle: any,
};
const styles = {
  starIconStyle: {
    width: 10,
    height: 10,
  },
  infoContainer2: {
    flex: 0.19,
  },
  boxContainer: {
    borderWidth: 0.5,
    borderColor: colors.green,
    borderRadius: 10,
    overflow: 'hidden',
  },
  starContainer: {
    backgroundColor: colors.green,
    alignItems: 'center',
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topTenContainer: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  starText: {
    fontSize: fontSize.small,
    color: colors.white,
  },
  tonTenText: {
    fontSize: fontSize.smallest,
    color: colors.greyText,
  },
};
export const RatingBox = (props: Props) => {
  return (
    <View style={[styles.infoContainer2, props.containerStyle]}>
      <View style={styles.boxContainer}>
        <View style={styles.starContainer}>
          <Text style={styles.starText}>
            {props.details.Stars
              ? props.details.Stars !== 'NaN'
                ? props.details.Stars
                : 'N/A'
              : 'N/A'}{' '}
          </Text>
          <FastImage
            style={styles.starIconStyle}
            source={Images.main.starIcon}
            tintColor={colors.white}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.topTenContainer}>
          <Text style={styles.tonTenText}>
            {props.details['Top Ten'] !== 'NaN'
              ? props.details['Top Ten']
              : 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
};
