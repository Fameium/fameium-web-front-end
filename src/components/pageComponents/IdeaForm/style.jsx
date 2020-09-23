import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '200px',
        padding: '0px 200px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '100px',
            padding: '0px 20px',
        }
    },
    inputMargin: {
        marginTop: '30px',
    },


})) 

    
