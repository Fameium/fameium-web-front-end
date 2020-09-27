import React, { useContext, useState, useEffect} from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { MasterContext } from '../../context/MasterContext'



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SnackBar = () => {

    const { MasterDispatch, snackBar } = useContext(MasterContext)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        if(snackBar.bool) setStatus(true)
        else setStatus(false)
    }, [snackBar])

    function disableSnackBar() {
        setStatus(false)
        MasterDispatch({ type: 'SET_SNACK_BAR', value: { bool: false, severity: snackBar.severity, message: snackBar.message }})
    }

    return(
        <Snackbar open={status} autoHideDuration={2000} onClose={disableSnackBar}>
              <Alert onClose={disableSnackBar} severity={snackBar.severity}>
                {snackBar.message}
              </Alert>
            </Snackbar>
    )
}

export default SnackBar