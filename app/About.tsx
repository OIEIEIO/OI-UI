import SupportButton from '@components/buttons/SupportButton'
import { FontAwesome } from '@expo/vector-icons'
import { AppSettings } from '@lib/constants/GlobalValues'
import { Logger, Style } from '@lib/utils/Global'
import appConfig from 'app.config'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv'

const About = () => {
    const [counter, setCounter] = useState<number>(0)
    const [devMode, setDevMode] = useMMKVBoolean(AppSettings.DevMode)

    const updateCounter = () => {
        if (devMode) return
        if (counter === 6) {
            Logger.log(`You have enabled dev mode.`, true)
            setDevMode(true)
        }
        setCounter(counter + 1)
    }

    const version = 'v' + appConfig.expo.version
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'About',
                    animation: 'fade',
                }}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={updateCounter}>
                <Image source={require('../assets/images/icon.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.titleText}>OI-UI</Text>
            <Text style={styles.subtitleText}>
                Version {version} {devMode && '[DEV MODE]'}
            </Text>
            {devMode && (
                <TouchableOpacity
                    style={{
                        ...styles.supportButton,
                        marginTop: 24,
                        borderColor: Style.getColor('destructive-brand'),
                    }}
                    onPress={() => {
                        setCounter(0)
                        setDevMode(false)
                        Logger.log('Dev mode disabled')
                    }}>
                    <Text style={styles.supportText}>Disable Dev Mode</Text>
                </TouchableOpacity>
            )}
            
            <Text style={styles.body}>
                OI-UI is an innovative AI-powered application designed to bring advanced machine learning capabilities to your fingertips. 
            </Text>
            <Text style={{ marginBottom: 20, ...styles.body }}>
                Built with cutting-edge technology, OI-UI seamlessly integrates AI-driven solutions, allowing users to experience intelligent automation, data analysis, and personalized interactions like never before.
            </Text>

            <Text style={styles.body}>
                Whether you're an AI enthusiast, developer, or business professional, OI-UI provides the tools you need to harness the power of artificial intelligence for enhanced productivity and smarter decision-making.
            </Text>

            <Text style={styles.body}>Have feedback or questions? Reach out here:</Text>

            <Text style={styles.subtitleText}>(Don't forget to include your logs!)</Text>
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL('https://github.com/OIEIEIO/OI-UI')
                }}
                style={styles.supportButton}>
            <Text style={styles.supportText}>Visit Our Support Page</Text>
            <FontAwesome name="github" size={20} color={Style.getColor('primary-text1')} />
            </TouchableOpacity>

        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 64,
        paddingVertical: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: { color: Style.getColor('primary-text1'), fontSize: 32 },
    subtitleText: { color: Style.getColor('primary-text2') },
    body: { color: Style.getColor('primary-text1'), marginTop: 20, textAlign: 'center' },
    icon: {
        width: 120,
        height: 120,
    },
    supportText: { color: Style.getColor('primary-text2'), paddingRight: 4 },

    supportButton: {
        marginTop: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Style.getColor('primary-brand'),
        padding: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 16,
    },
})
