//---------- imports

// react
import React, { useContext } from "react";

//---------- context
import { AppContext } from './GlobalContextProvide'

const ContextHelper = () => {

    //---------- state, veriable, context and hooks
    const {
        apiData,
        listItem,
        cardData,

        setApiData,
        setListItem,
        setCardData
    } = useContext(AppContext);

    //---------- main app / component

    return {
        apiData,
        listItem,
        cardData,

        setApiData,
        setListItem,
        setCardData
    }

}

//---------- export component

export default ContextHelper;
