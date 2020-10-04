import {makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        marginTop: '70px',
        width: '100%'
    },
    mainTitle: {
        marginLeft: '10px'
    },

        // backgroundColor: 'red',
        // color: 'white'
        
    
    titleContainer: {
        // backgroundColor: 'red',
        padding: '20px 40px',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 10px 0px',
            marginBottom: '10px'
        }
        
    },
    lastEdited: {
        marginLeft: 'auto'
    },
    column1: {
        // backgroundColor: 'blue',
        padding: '20px 40px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 10px'
        }

    },
    column2: {
        // backgroundColor: 'pink',
        padding: '0px 10px 20px',

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
    },
    secondButton: {
        marginLeft: '15px'
    },
    heading: {
        marginBottom: '10px',
        marginTop: '15px'
    },
    skeleton: {
        height: 'calc(100vh/2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

}))
export default useStyles