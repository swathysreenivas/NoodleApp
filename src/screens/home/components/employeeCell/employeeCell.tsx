import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ProgressiveImage from '../../../../components/progressiveImage';
import {RatingBox} from '../../../../components/ratingBox';
import {colors, Images} from '../../../../themes';
import {styles} from './style';
type Props = {
  details: any;
  index: number;
  onPress: any;
  image: string;
};

export const EmployeeCell = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.details)}>
      <View style={styles.row}>
        <ProgressiveImage
          style={styles.thumbnail}
          imageSource={{
            uri: props.image ? props.image.Image : '',
          }}
          thumbnailSource={Images.main.placeholder}
        />

        <View style={styles.infoContainer}>
          <View style={styles.spaceBtn}>
            <View style={styles.infoContainer1}>
              <Text style={styles.nameStyle}>{props.details.Brand}</Text>
              <Text style={styles.companyNameStyle}>
                {props.details.Variety ? props.details.Variety : '-'} (
                {props.details.Style ? props.details.Style : ''})
              </Text>
              <Text style={[styles.companyNameStyle, {color: colors.blue}]}>
                {props.details.Country ? props.details.Country : '-'}
              </Text>
            </View>
            <RatingBox details={props.details} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
