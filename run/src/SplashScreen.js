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
import { Button, Container, } from "native-base";
import LinearGradient from 'react-native-linear-gradient';


export default class SplashScreen extends Component {
    render() {
        return (
            <LinearGradient colors={['#12c2e9', '#c471ed', "#f64f59"]} style={styles.linearGradient}>
                <Container>
                    <View style={styles.container}>
                        <View style={styles.logo}>
                            <Text style={{ fontSize: 60, color: "#ffffff", fontWeight: "bold", fontFamily: "sans-serif-light", paddingTop: 90, marginTop: 75 }}> Dairy Life</Text>
                            <Button rounded style={styles.buttonLogin} onPress={() => this.props.navigation.navigate("Login")}>
                                <Text style={{
                                    color: "#ffffff", fontWeight: "bold", fontFamily: "sans-serif-light", fontSize: 18, alignItems: "center", justifyContent: "center",
                                }}>Login</Text>
                            </Button>
                            <Button rounded style={styles.buttonRegister} onPress={() => this.props.navigation.navigate("Register")}>
                                <Text style={{
                                    color: "#ffffff", fontWeight: "bold", fontFamily: "sans-serif-light", fontSize: 18, alignItems: "center", justifyContent: "center",
                                }}>Register</Text>
                            </Button>



                        </View>
                        <View style={styles.welcome}>
                            <Text style={{ fontSize: 30, color: "#ffffff", fontWeight: "bold", fontFamily: "sans-serif-light", marginTop: 80 }}>Welcome</Text>

                        </View>
                    </View>
                </Container>
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
        flexDirection: 'column',
        // backgroundColor: "#d15757"
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    welcome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",

    },
    buttonLogin: {
        width: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        marginLeft: 150,
        backgroundColor: 'transparent'

    },
    buttonRegister: {
        width: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginLeft: 150,
        backgroundColor: 'transparent'
    }
});
