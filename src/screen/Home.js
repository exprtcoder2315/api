// -------- import react
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

// -------- context
import ContextHelper from '../ContextHooks/ContextHelper'

// -------- common
import Header from '../component/Header'
import ListView from '../component/ListView'
import SearchBar from '../component/SearchBar'

// --------  debounce
import { debounce } from 'lodash'

// -------- main component
const Home = ({ navigation }) => {

    // context
    const {
        apiData,

        setListItem,
    } = ContextHelper()

    // state
    const [filterData, setFilterData] = useState()

    // helper: searchwithtext
    const handleChange = (e) => {
        debounceCall(e);
    };

    // helper
    const debounceCall = useCallback
        (debounce(e => {
            searchAPICall(e);
        }, 500));

    // search Data from list
    const searchAPICall = (e) => {
        let listToDisplay = apiData?.filter((x) => {
            return x?.label?.toLowerCase().includes(e.toLowerCase())
        });
        setFilterData(listToDisplay)
    }

    // -------- render View
    return (
        <>
            {/* top header */}
            <Header navigation={navigation} ScreenName="Home" />

            <View
                style={{
                    paddingHorizontal: 20,
                    marginTop: 20
                }}
            >
                {/* searchbar */}
                <SearchBar handleChange={(e) => handleChange(e)} />

                {/* render list data */}
                <ListView
                    data={!filterData ? apiData : filterData}
                    onPress={(item) => {
                        setListItem(item)
                        navigation.navigate('Details')
                    }}
                />
            </View>
        </>
    )
}

export default Home;