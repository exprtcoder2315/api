// ------- import react and  its element
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// ------- main component
const ListView = (
    // params
    {
        data,
        onPress
    }) => {
    // ------- render view
    return (
        <FlatList
            style={{
                marginTop: 20,
            }}
            data={data}
            renderItem={({ item, index }) => {
                return (
                    <View key={index}>
                        {/* CardContainer */}
                        <TouchableOpacity
                            style={styles.container}
                            onPress={() => onPress && onPress(item)}
                        >
                            {/* LabelName */}
                            <Text
                                style={styles.label}
                            >
                                {
                                    item.label
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default ListView;
// styles
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: '#7fb5eb',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000',
        textAlign: 'center',
    },
})