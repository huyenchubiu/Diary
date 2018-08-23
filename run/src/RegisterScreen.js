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
    View,
    Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var { height, width } = Dimensions.get('window');

type Props = {};
export default class RegisterScreen extends Component<Props> {
    render() {
        return (
            <LinearGradient colors={['a6c0fe', '#f68084']} style={styles.linearGradient}>
                <View style={styles.container}>
                    <Text>RegisterScreen</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
