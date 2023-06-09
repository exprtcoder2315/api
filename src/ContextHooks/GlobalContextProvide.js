//---------- imports

// react
import React, { useEffect, useState, createContext } from "react";

// --------- api 
import axios from "axios";

const AppContext = createContext();

//---------- main app / component
const GlobalContextProvide = (props) => {

    //---------- state, veriables and hooks

    const [listItem, setListItem] = useState()
    const [apiData, setApiData] = useState()
    const [cardData, setCardData] = useState()

    //---------- life cycle
    useEffect(() => {
        axios.get('https://nifty-kare-32d12b.netlify.app/treemenu.json')
            .then((response) => {
                if (response !== undefined && response !== null) {
                    setApiData(response.data)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    //---------- return main view
    return (
        <AppContext.Provider
            value={{
                apiData,
                listItem,
                cardData,

                setApiData,
                setListItem,
                setCardData
            }}
        >
            {
                props.children
            }
        </AppContext.Provider>
    );
};

//---------- export component
export { GlobalContextProvide, AppContext };