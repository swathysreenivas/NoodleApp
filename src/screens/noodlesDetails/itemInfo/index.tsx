import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

type Props = {
  details: any;
};

export const ItemInfo = (props: Props) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.headStyle}>{props.details.head}</Text>
      <Text style={styles.textStyle}>{props.details.value}</Text>
    </View>
  );
};
