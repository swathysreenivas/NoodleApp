import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackIconHeader} from '../../components/header';
import ProgressiveImage from '../../components/progressiveImage';
import {RatingBox} from '../../components/ratingBox';
import {RootStackParamList} from '../../navigation/config';
import {colors, Images} from '../../themes';
import strings from '../../utilities/strings';
import {ItemInfo} from './itemInfo';
import {styles} from './style';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
  route: any;
};

export const NoodlesDetails = ({navigation, route}: Props) => {
  const [details, setDetails] = useState(route.params.itemInfo);
  const insets = useSafeAreaInsets();

  useEffect(() => {}, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      {renderImage()}
      <BackIconHeader
        title={''}
        navigation={navigation}
        onBack={() => navigation.goBack()}
      />
      {renderDetails()}
    </View>
  );
  function renderImage() {
    return (
      <View style={styles.topContainer}>
        <ProgressiveImage
          style={styles.imageStyle}
          imageSource={{
            uri: details.image ? details.image.Image : undefined,
          }}
          thumbnailSource={Images.main.placeholder}
        />
        {renderRating()}
      </View>
    );
  }
  function renderRating() {
    return (
      <RatingBox details={details} containerStyle={styles.ratingContainer} />
    );
  }
  function renderDetails() {
    return (
      <View style={styles.contentContainerStyle}>
        <ItemInfo details={{head: 'Brand', value: details.Brand}} />
        <ItemInfo details={{head: 'Variety', value: details.Variety}} />
        <ItemInfo details={{head: 'Style', value: details.Style}} />
        <ItemInfo
          details={{
            head: 'Country',
            value: details.Country,
          }}
        />
      </View>
    );
  }
};
