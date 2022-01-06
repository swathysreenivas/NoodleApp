import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeStack from './homeStack';

const RootStack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{animation: 'default', headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default AppContainer;
