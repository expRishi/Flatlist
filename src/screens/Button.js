import React from 'react';
import {  View, StyleSheet, Button, Alert, TouchableOpacity, Image } from 'react-native';

const componentName = () => {
    return (
      <View>
        <Button
            title='Testing Button'
            onPress = {() =>
                {
                    Alert.alert("Testing alert");
                }
            }
        />

        <TouchableOpacity
            onPress = {() =>
                {
                    Alert.alert("Testing alert");
                }
        }
        >
            <Image style={styles.imageStyle} source={require("../../assets/pexels-mikhail-nilov-7671957.jpg")}/>
        </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
    },
});

export default componentName;
