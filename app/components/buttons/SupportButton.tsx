import { FontAwesome } from '@expo/vector-icons'
import { Style } from '@lib/utils/Global'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native'

const SupportButton = () => {
    return (
        <TouchableOpacity
            onPress={() => {
                Linking.openURL('https://oieieio.ca')
            }}
            style={styles.supportButton}>
            <Text style={styles.supportText}>Support OI-UI</Text>
            <FontAwesome name="coffee" size={16} color={Style.getColor('primary-text1')} />
        </TouchableOpacity>
    )
}

export default SupportButton

const styles = StyleSheet.create({
    supportText: { color: Style.getColor('primary-text2'), paddingRight: 4 },

    supportButton: {
        alignSelf: 'center',
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Style.getColor('primary-brand'),
        padding: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 16,
    },
})
