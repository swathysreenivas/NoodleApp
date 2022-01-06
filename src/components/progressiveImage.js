// @flow

import React, {useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

type Props = {
  imageSource: Object,
  thumbnailSource: Object,
  style: Object,
  placeHolderColor?: string,
  placeHolderSource?: number,
  imageFadeDuration?: number,
  onLoadThumbnail?: Function,
  onLoadImage?: Function,
  thumbnailFadeDuration?: number,
  thumbnailBlurRadius?: number,
};

const ProgressiveImage = (props: Props) => {
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const thumbnailOpacity = useRef(new Animated.Value(0)).current;

  const onLoadThumbnail = () => {
    Animated.timing(thumbnailOpacity, {
      toValue: 1,
      duration: props.thumbnailFadeDuration,
      useNativeDriver: true,
    }).start();
    props.onLoadThumbnail();
  };

  const onLoadImage = evt => {
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: props.imageFadeDuration,
      useNativeDriver: true,
    }).start();
    Animated.timing(thumbnailOpacity, {
      toValue: 0,
      duration: props.thumbnailFadeDuration,
      useNativeDriver: true,
    }).start();
    props.onLoadImage(evt);
  };

  return (
    <View style={props.style}>
      <Animated.Image
        resizeMode="cover"
        style={[styles.image, {opacity: thumbnailOpacity}, props.style]}
        source={props.thumbnailSource}
        onLoad={onLoadThumbnail}
        blurRadius={props.thumbnailBlurRadius}
      />
      <AnimatedFastImage
        source={props.imageSource}
        style={[
          styles.image,
          {opacity: imageOpacity, backgroundColor: 'white'},
          props.style,
        ]}
        resizeMode={FastImage.resizeMode.cover}
        onLoad={evt => onLoadImage(evt)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

ProgressiveImage.defaultProps = {
  thumbnailFadeDuration: 250,
  imageFadeDuration: 250,
  thumbnailBlurRadius: 5,
  onLoadThumbnail: Function.prototype,
  onLoadImage: Function.prototype,
};

export default ProgressiveImage;
