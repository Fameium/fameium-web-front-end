import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AppHeader from '../../commonComponents/appheader/AppHeader'

import { Grid, Typography, Paper, Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import useStyles from './style.jsx'
import { MasterContext } from '../../../context/MasterContext'
import api from '../../../APIs/api'
import utilFunctions from '../../../utilityFunctions/localStorage'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Skeleton from '@material-ui/lab/Skeleton';
import Snackbar from '@material-ui/core/Snackbar';




const ProjectView = () => {

    const classes = useStyles();
    const { MasterDispatch } = useContext(MasterContext)
    const { get } = api();
    const history = useHistory()
    const { getItem } = utilFunctions;
    const { del } = api();
    /**-------------------------------------------------- */
    const [profile, setProfile] = useState(null)
    const [id, setId] = useState(history.location.pathname.split('/')[3])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [notes, setNotes] = useState('')
    // const [script, setScript] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [contentLoaded, setContentLoaded] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    /**-------------------------------------------------- */

    useEffect(() => {
        if(showSnackbar) {
            setTimeout(() => setShowSnackbar(false) , 3000);
        }
    }, [showSnackbar])


    useEffect(() => {

        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        get(`ideas/${id}`, params, header, {})
            .then((res) => {
                setContentLoaded(true)
                setProfile(res.data)
                setId(res.data.id)
                setName(res.data.name)
                setDescription(res.data.description)
                setNotes(res.data.notes)
            })
            .catch((err) => {
                console.log('response', err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function onEditClick() {
        MasterDispatch({ type: 'SET_SELECTED_ITEM', value: profile })
        history.push(`/productivity/idea/${id}/edit`)
    }

    function onDeleteClick() {
        setShowPopup(false)
        setContentLoaded(false)
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        del(`ideas/${id}`, params, header, {})
            .then((res) => {
                setSnackbarMessage('Idea Deleted Succesfully')
                setShowSnackbar(true)
                history.push(`/productivity`)
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'success', message: 'idea deleted' }})
                console.log('response', res)

            })
            .catch((err) => {
                setContentLoaded(true)
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'error', message: 'Error while deleting idea' }})
                console.log('response', err)
            })

    }





    return (<>
        <AppHeader activeTab='productivity' />
        <Grid container className={classes.mainContainer}>
            {/* col-1 */}{contentLoaded && <>
                <Grid container item xs={12} sm={6} className={classes.column1} direction='coloumn'>
                    <Grid item className={classes.mainTitle}><Typography variant="h4">{name}</Typography></Grid>
                    <Grid container item direction='column'>
                        {description !== '' && <>
                        <Typography variant='h5'>Description</Typography>
                        <Paper elevation={2} style={{ width: '100%' }} className={classes.paper}>
                            <Typography variant='body2' className={classes.propertyDescription}>{description}</Typography>
                        </Paper>
                        </>}

                       {notes !== '' && <Grid container item className={classes.propertyGroup} direction='column'>
                            <Typography variant='h5'>Notes</Typography>
                            <Paper elevation={2} style={{ width: '100%' }} className={classes.paper}>
                                <Typography variant='body2' className={classes.propertyDescription}>{notes}</Typography>
                            </Paper>
                        </Grid>}
                        <Grid container item className={classes.propertyGroup} >
                            <Grid xs={4}><Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} onClick={onEditClick} >Edit</Button></Grid>
                            <Grid xs={4}><Button variant="contained" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} style={{ marginLeft: '10px' }} onClick={() => setShowPopup(true)} >Delete</Button></Grid>
                        </Grid>
                    </Grid>

                </Grid>
                {/* col-1 */}
            </>}
            {!contentLoaded && <Grid item xs={12} className={classes.skeleton}>
                <div>
                    <CircularProgress color="secondary" />
                </div>
            </Grid>}

            {/* popup */}
            <Dialog open={showPopup} onClose={() => setShowPopup(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description"> Are you sure to delete this idea? Isn't it worth trying out? </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowPopup(false)} color="primary"> No </Button>
                    <Button onClick={onDeleteClick} color="primary" autoFocus> Yes </Button>
                </DialogActions>
            </Dialog>
            {/* popup */}
        </Grid>
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={showSnackbar}
            onClose={() => setShowSnackbar(false)}
            message={snackbarMessage}

        />
    </>
    )
}

export default ProjectView