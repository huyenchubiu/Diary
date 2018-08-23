/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { createStackNavigator } from "react-navigation";
import LoginScreen from "./src/LoginScreen";
import NewFeedScreen from "./src/NewFeedScreen";
import SplashScreen from "./src/SplashScreen";
import RegisterScreen from './src/RegisterScreen';

export default createStackNavigator({
    Splash: {
        screen: SplashScreen
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    },
    NewFeed: {
        screen: NewFeedScreen
    }

}, { headerMode: "none" },
);

