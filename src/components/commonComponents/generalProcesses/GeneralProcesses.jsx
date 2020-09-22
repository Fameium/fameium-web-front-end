import React, { useEffect, useContext } from 'react'
// import { useHistory } from 'react-router-dom';
import { MasterContext } from '../../../context/MasterContext'
import utilFunctions from '../../../utilityFunctions/localStorage'

const GeneralProcesses = () => {//This compoenent doesn't render anything. It just includes some general function that are active always.
    // const history = useHistory()
    const { initiateAuthClearance, MasterDispatch, selectedItem } = useContext(MasterContext)
    const { getItem } = utilFunctions

/** --- initialLoad/reLoad, checking for earlier logins--------------------------------- */
    if(getItem('isAuthenticated')) MasterDispatch({ type: 'SET_IS_AUTHENTICATED', value: true})
/**------------------------------------------------------------------------------------- */

/** ---- auth clearance routine here----------------------------------------------------  */
useEffect(() => {
        if(initiateAuthClearance){
            MasterDispatch({ type: 'SET_IS_AUTHENTICATED', value: false})
            window.localStorage.clear()
            //push to login page
            MasterDispatch({ type: 'SET_INITIATE_AUTH_CLEARANCE', value: false})//ending clearnace procedure
        }
    }, [MasterDispatch, initiateAuthClearance])
/**------------------------------------------------------------------------------------- */
/**------------- TESTING --------------------------------------------------------------- */
useEffect(() => {
    console.log('si', selectedItem)
}, [selectedItem])
/**------------------------------------------------------------------------------------- */



    return(<></>)//Render nothing!
}

export default GeneralProcesses