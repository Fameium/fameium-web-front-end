import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '150px',
        marginBottom: '100px',
        padding: '0px 100px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '100px',
            padding: '0px 20px',
        }
    },
    inputMargin: {
        marginTop: '30px'
    },
    mainTitle: {
        marginBottom: '20px'
    },
    column1: {
        height: '100%',
        marginRight: '10px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0px',
        }
    },
    column2: {
        marginLeft: 'auto',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        }
    },
    agreementMargin: {
        marginTop: '10px'
    }
}))