import {makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        marginTop: '50px'
    },
    mainTitle: {
        marginLeft: '0px'
    },
    titleContainer: {
        // backgroundColor: 'red',
        padding: '20px 10px',
        marginBottom: '10px'
        
    },
    lastEdited: {
        marginLeft: 'auto'
    },
    column1: {
        // backgroundColor: 'blue',
        padding: '20px 10px',

    },
    column2: {
        // backgroundColor: 'pink',
        padding: '20px 10px',

    },
    endDate: {
        marginLeft: 'auto'
    },
    paper: {
        padding: '10px',
        marginBottom: '10px',
        borderColor: 'blue'
    },
    datePaper: {
        width: '100%'
    }

}))
export default useStyles