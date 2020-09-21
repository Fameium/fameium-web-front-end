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
        marginBottom: '20px'
        
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
    },
    secondButton: {
        marginLeft: '15px'
    },
    heading: {
        marginBottom: '10px',
        marginTop: '15px'
    }

}))
export default useStyles