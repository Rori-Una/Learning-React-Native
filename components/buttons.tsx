// components for the keypad
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colours } from '@/utils/colours';

const Button = ({title, type, onPress} : {
        title: string, 
        type: "clear" | "ops" | "number" | "del";
        onPress: Function
    }) => {
    return (
        <TouchableOpacity style={[
            styles.button,
            {
                backgroundColor: 
                    type == "clear" 
                        ? colours.typeC 
                        : type == "del" 
                        ? colours.typeDel 
                        : type == "ops" 
                        ? colours.typeOp 
                        : type == "number" 
                        ? colours.lightPink
                        : colours.darkMod,
            },

            ]} onPress={onPress}>
                <Text style={{fontSize: 35, color: colours.hotPink}}>{title}</Text>
        </TouchableOpacity>
    );  
};

export default Button;

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        borderRadius: 10,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colours.hotPink,
        borderWidth: 2,
    }
});