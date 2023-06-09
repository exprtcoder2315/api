// ------- import react
import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// ------- context
import ContextHelper from '../ContextHooks/ContextHelper'

// ------- common
import Header from '../component/Header'
import ListView from '../component/ListView'
import SearchBar from '../component/SearchBar'

// ------- debounce
import { debounce } from 'lodash'

// ------- main Component
const Details = ({ navigation }) => {
    // context
    const {
        listItem,
        // listItem?.nodes[0]

    } = ContextHelper()

    // state
    const [addMore, setAddMore] = useState(1)
    const [state, setState] = useState([])
    const [loadMore, setLoadMore] = useState(false)
    const [filterData, setFilterData] = useState()
    const [mainData, setMainData] = useState([
        {
            "label": "1",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "2",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "3",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "4",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "5",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "6",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "7",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "8",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "9",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "10",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "11",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "12",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "13",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "14",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "15",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "16",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "17",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "18",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "19",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "20",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "21",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "22",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "23",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "24",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "25",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "26",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "27",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "28",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "29",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "30",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "31",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "32",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "33",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "34",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "35",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "36",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "37",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "38",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "39",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "40",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "41",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "42",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "43",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "44",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "45",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "46",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "47",
            "url": "https://www.google.com/search?q=lizard"
        },
        {
            "label": "48",
            "url": "https://www.google.com/search?q=lizard"
        },
    ])

    // hooks: 1
    useEffect(() => {
        let data = listItem.nodes[0].nodes || []
        const filterData = data.slice(0, addMore)
        setState(filterData)
    }, [addMore])

    // hooks: 2
    useEffect(() => {
        if (state.length === listItem.nodes[0].nodes.length) {
            setLoadMore(true)
        }
    })

    // helper: load more data
    const handleAddMore = () => {
        setAddMore(addMore + 1)
    }

    // helper: searchwithtext
    const handleChange = (e) => {
        debounceCall(e);
    }

    // helper
    const debounceCall = useCallback
        (debounce(e => {
            searchAPICall(e);
        }, 500), []);

    // search Data from list
    const searchAPICall = (e) => {
        listToDisplay = listItem.nodes[0].nodes.filter((x) => {
            return x?.label?.toLowerCase() === (e.toLowerCase()) || x?.label?.toLowerCase().includes(e.toLowerCase())
        });
        setFilterData(listToDisplay)
        setLoadMore(true)
    }

    // ------- render View
    return (
        <>
            {/* header */}
            <Header navigation={navigation} backIcon ScreenName="Details" />

            {/* label name */}
            <View style={styles.subHead}>
                <Text
                    style={styles.label}
                >
                    {
                        `${listItem?.label} / ${listItem.nodes[0].label}`
                    }
                </Text>
            </View>

            <View
                style={{
                    height: '88%',
                    paddingHorizontal: 20,
                }}
            >

                {/* SearchBar */}
                <SearchBar handleChange={(e) => handleChange(e)} />

                {/* List View */}
                <ListView
                    data={!filterData ? state : filterData}
                />

                {/* load more */}
                {
                    !loadMore &&
                    <TouchableOpacity
                        onPress={() => handleAddMore()}
                        style={styles.btn}>
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold'
                            }}
                        >
                            Load More
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </>
    )
}

export default Details;

// style
const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000',
        textAlign: 'center',
    },
    subHead: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#2785e3',
        width: '50%',
        alignSelf: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2785e3',
        height: 45,
        borderRadius: 40,
        paddingHorizontal: 15,
        marginBottom: 20
    },
})