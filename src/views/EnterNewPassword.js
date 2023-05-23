import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, View, Text, Image } from 'react-native'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'
import ButtonPrimary from '../components/ButtonPrimary'
import InputTransparent from '../components/InputTransparent'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function EnterNewPassword({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')

    const ref_input2 = useRef()


    useEffect(() => {
        console.log('OPEN', EnterNewPassword.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', EnterNewPassword.name, 'CLOSE')
        }
    }, [])
    Appearance.getColorScheme()
    Appearance.addChangeListener(({ colorScheme }) => {
        console.log('COLOR THEME WAS ALTER')
        console.log(colorScheme)
        if (Platform.OS === 'android')
            NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1)
    })
    const onLayoutRootView = useCallback(async () => {
        if (isLoading) {
        }
    }, [isLoading]);
    if (isLoading) {
        return (
            <Loader />
        );
    }
    return (
        <SafeAreaView style={[styleSelected.backgroundPrimary, styleSelected.AndroidSafeArea, { flex: 1 }]} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            {/* <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            > */}
            <KeyboardAwareScrollView style={{flex:1}}>
                <View style={[styleSelected.backgroundPrimary, { flex: 1 }]}>
                    <View style={styleSelected.smallerImageContainer}>

                    </View>
                    {/* <View style={{flex:1}}> */}
                        <Text style={[styleSelected.textBold20DarkBlue, {marginTop: 45, textAlign: "center"}]}>Create new password</Text>
                        <Text style={[styleSelected.textRegular14Gray, {width:"65%", marginTop: 5, textAlign: "center", alignSelf: "center"}]}>Your new password should be unique so you don't forget it :)</Text>

                    {/* </View> */}
                    <View style={styleSelected.paleBlueContainer}>
                        <InputTransparent blurOnSubmit={false} isPassword={true} onSubmitEditing={() => ref_input2.current?.focus()} returnKeyType='next' placeholderText={"Enter new password"} />
                        <InputTransparent inputRef={ref_input2} isPassword={true} placeholderText={"Confirm new password"} />
                        <ButtonPrimary title={"Reset Password"} />
                    </View>
                </View>
                </KeyboardAwareScrollView>
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    )
}