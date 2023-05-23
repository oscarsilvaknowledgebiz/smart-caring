import React from "react";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'

export default function ButtonPrimary({ title, event }) {
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    return (
        <TouchableOpacity
            onPress={() => {
                if (typeof event == "function")
                    event()
            }}
            style={[styleSelected.buttonSize, { backgroundColor: colors.Base_Slot_2 }]}>
            <Text style={styleSelected.textRegular16}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}