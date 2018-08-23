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
    Dimensions,
    TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
var { height, width } = Dimensions.get('window');

type Props = {};
export default class LoginScreen extends Component<Props> {
    render() {
        return (
            <Container>
                <LinearGradient colors={['#cc2b5e', '#753a88']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <Text style={{ color: "#fffdfc", fontSize: 50, marginTop: 20 }}>Dairy Life</Text>
                        <TextInput style={styles.input}
                            placeholder="Email" />
                        <TextInput style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true} />

                    </View>
                </LinearGradient>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,



    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: "absolute",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    welcome: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        flex: 1,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    input: {
        flex: 1,
        height: 40,
        backgroundColor: 'transparent',
        color: "#fcfcfc",
        paddingHorizontal: 10,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button:{
        flex:1,
        
    }

});
