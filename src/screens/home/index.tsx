import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {apiManager} from '../../api';
import {RootStackParamList} from '../../navigation/config';
import {colors, Images} from '../../themes';
import {getEmployeeDetails} from '../../utilities/asyncStore';
import strings from '../../utilities/strings';
import {EmployeeCell} from './components/employeeCell/employeeCell';
import {styles} from './style';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

export const Home = ({navigation}: Props) => {
  const [dataList, setDataList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [imagesList, setImagesList] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    getNoodlesList();
    getImagesList();
  }, []);

  const getNoodlesList = () => {
    const apiData = {
      method: 'get',
      endPoint: 'noodlesList',
    };
    apiManager(apiData)
      .then(response => {
        setDataList(response);
      })
      .catch(reject => {
        console.log('Error: ', reject);
      });
  };
  const getImagesList = () => {
    const apiData = {
      method: 'get',
      endPoint: 'imagesList',
    };
    apiManager(apiData)
      .then(response => {
        setImagesList(response);
      })
      .catch(reject => {
        console.log('Error: ', reject);
      });
  };
  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors.white}
      />
      {renderHeader()}
      {renderSearchField()}
      {isSorting ? renderSortSection() : null}
      {renderList()}
    </View>
  );
  function renderSortSection() {
    return (
      <TouchableOpacity
        style={styles.sortView}
        onPress={() => {
          setIsSorting(false);
          setSearchList([]);
        }}>
        <Text style={styles.text}>{strings.main.clearSort}</Text>
      </TouchableOpacity>
    );
  }
  function renderHeader() {
    return <Text style={styles.head}>Noodles Store</Text>;
  }
  function renderSearchField() {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={searchText}
            onChangeText={text => {
              handleSearchText(text);
            }}
            placeholder={strings.main.searchPlaceholder}
            placeholderTextColor={colors.greyText}
          />
          <TouchableOpacity
            onPress={() => {
              setSearchText('');
              setSearchList([]);
            }}>
            <Text style={styles.text}>clear</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sortIcon} onPress={() => sortList()}>
          <FastImage
            tintColor={isSorting ? colors.green : colors.greyText}
            style={styles.sortIconStyle}
            source={Images.main.sortIcon}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function handleSearchText(text: string) {
    let empList = [...dataList];
    setSearchText(text);
    let filterList = empList.filter(item => item.Brand.includes(text));

    setSearchList(filterList);
  }
  function sortList() {
    let empList = [...dataList];

    let sortListTemp = empList.sort(
      (a, b) => a - b || isNaN(a.Stars) - isNaN(b.Stars),
    );

    setSearchList(sortListTemp);
    setIsSorting(true);
  }

  function renderList() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        data={searchList.length > 0 || searchText ? searchList : dataList}
        renderItem={({item, index}) => {
          let img = imagesList[Math.floor(Math.random() * imagesList.length)];
          return (
            <EmployeeCell
              image={img ? img : ''}
              details={item}
              index={index}
              onPress={itemInfo =>
                onPressListItem({
                  image: img,
                  ...itemInfo,
                })
              }
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
  function onPressListItem(itemInfo: any) {
    navigation.navigate('NoodlesDetails', {itemInfo: itemInfo});
  }
};
