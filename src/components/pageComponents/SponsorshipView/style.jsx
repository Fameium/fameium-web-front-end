import {makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '150px',
        padding: '0px 150px',
        marginBottom: '100px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '100px',
            padding: '0px 20px',
        },
    },
    mainTitle: {
        marginBottom: '20px',
    },
    propertyGroup: {
        marginTop: '15px',
    },
    propertyDescription: {
        marginTop: '10px',
        padding: '10px'
    },
    paper: {
        marginTop: '10px'
    },
    column1: {
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px 0px 0px',
        },
    },
    column2: {
        padding: '0px 0px 0px 20px',
        [theme.breakpoints.down('sm')]: {
        padding: '0px 0px 0px 0px',
            },
    },
    skeleton: {
        height: 'calc(100vh/2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

}))
export default useStyles