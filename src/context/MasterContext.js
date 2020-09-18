import React, { createContext, useReducer } from 'react'


const initialState = {
    isAuthenticated: false,
    initiateAuthClearance: false,
    token: null,
    tokenHeader: null,
    profile: null,
    activeTenant: null,
    productivityData: null

}

export const MasterContext = createContext(initialState)

const MasterContextReducer = (state, action) => {
    switch (action.type) {
        case 'SET_IS_AUTHENTICATED':
            return { ...state, isAuthenticated: action.value }
        case 'SET_INITIATE_AUTH_CLEARANCE':
            return { ...state, initiateAuthClearance: action.value }
        case 'SET_TOKEN':
            return { ...state, token: action.value }
        case 'SET_TOKEN_HEADER':
            return { ...state, tokenHeader: action.value }
        case 'SET_PROFILE':
            return { ...state, profile: action.value }
        case 'SET_ACTIVE_TENANT':
            return { ...state, activeTenant: action.value }
        case 'SET_PRODUCTIVITY_DATA':
            return { ...state, productivityData: action.value }
        default:
            return state

    }
}

const MasterContextProvider = (props) => {
    const [state, MasterDispatch] = useReducer(MasterContextReducer, initialState)

    /* --------------------------------------------- */
    return (
        <MasterContext.Provider value={{ ...state, ...props, MasterDispatch }}>
            {props.children}
        </MasterContext.Provider>
    )
}
/* --------------------------------------------- */
export default MasterContextProvider