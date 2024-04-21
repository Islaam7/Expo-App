import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../../Utils/Color';
import { TouchableOpacity } from 'react-native';

export default function Login() {
    return (
        <View>

            <Image source={require('./../../../assets/images/login.png')}
                style={styles.login}
            />

            <View style={styles.subContainer}>

                <Text style={{ fontSize: 25, color: Color.WHITE, textAlign: 'center' }}>
                    Let's
                    <Text style={{ fontWeight: 'bold' }}>Shopping !</Text>
                </Text>

                <Text style={{ fontSize: 17, color: Color.WHITE, marginTop: 20, textAlign: 'center' }}>
                    Best App For Shopping
                </Text>

                <TouchableOpacity style={styles.button} onPress={()=>console.log("Button Clicked")}>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: Color.PRIMARY }}>
                        Let's Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    login: {
        width: 200,
        height: 350,
        marginTop: 70,
        borderWidth: 7,
        borderColor: Color.BLACK,
        borderRadius: 15
    },
    subContainer: {
        width: '100%',
        backgroundColor: Color.PRIMARY,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    button: {
        padding: 15,
        backgroundColor: Color.WHITE,
        borderRadius: 99,
        marginTop: 40,
    }

});