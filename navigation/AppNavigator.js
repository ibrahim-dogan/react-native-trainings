import React from 'react';
import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import SignInScreen from '../screens/SignInScreen'
import OtherScreen from '../screens/OtherScreen'
import HomeScreen from '../screens/HomeScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import MainTabNavigator from './MainTabNavigator';

const AppStack = createStackNavigator({Home: HomeScreen, Other: OtherScreen});
const AuthStack = createStackNavigator({SignIn: SignInScreen});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Main: MainTabNavigator,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));









