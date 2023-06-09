import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ContextHelper from '../ContextHooks/ContextHelper'
import Header from '../component/Header'

const CardViews = ({ navigation }) => {
    const {
        cardData,

        setCardData
    } = ContextHelper()

    return (
        <View>
            <Header navigation={navigation} backIcon />
            <FlatList
                data={cardData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.container}>
                            <Text style={styles.cardlabel}>{item.label}</Text>
                        </TouchableOpacity>)
                }}
            />
        </View>
    )
}

export default CardViews

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3ce4f0',
        margin: 10,
        padding: 10,
        height: 80,
        borderRadius: 10
    },
    label: {
        fontSize: 20,
        fontWeight: '800',
        color: '#f21d76',
        textAlign: 'center',
    },
})