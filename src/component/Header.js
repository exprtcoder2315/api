// ------- import react and its element
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// ------- Main component
const Header = (
    // Params
    { navigation,
        backIcon,
        ScreenName
    }) => {
    // ------- render View
    return (
        <View
            style={styles.container}
        >
            {/* Back Icon */}
            {
                backIcon ?
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            style={styles.icon}
                            source={require('../Assets/back.png')}
                        />
                    </TouchableOpacity>
                    :
                    <View style={styles.icon} />
            }
            {/* Screen Label Name */}
            <Text
                style={styles.heading}
            >
                {
                    ScreenName
                }
            </Text>
            <View style={styles.icon} />
        </View>
    )
}

export default Header

// styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2785e3',
        height: 45,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        paddingHorizontal: 15,
    },
    heading: {
        fontSize: 17,
        color: '#000',
        fontWeight: '500'
    },
    icon: {
        height: 20,
        width: 20,
    }
})