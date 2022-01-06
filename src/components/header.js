// @flow
import * as React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, Images} from '../themes';
import {font, fontSize} from '../themes/fonts';

type BackIconProps = {
  color?: string,
  navigation: any,
  title: string,
  onBack: Function,
};

export const BackIconHeader = ({
  color = colors.black,
  title,
  navigation,
  onBack,
}: BackIconProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('s');
          if (navigation) {
            if (onBack) {
              onBack();
            } else {
              navigation.goBack();
            }
          }
        }}
        style={[styles.backIcon, {top: insets.top}]}>
        <FastImage
          style={styles.backIconStyle}
          source={Images.main.backIcon}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    position: 'absolute',
    left: 10,
    zIndex: 2,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  backIconStyle: {
    width: 15,
    height: 15,
  },
  headerText: {
    fontFamily: font.semiBold,
    fontSize: fontSize.size15,
    color: colors.black,
  },
});
