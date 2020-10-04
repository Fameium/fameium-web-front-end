import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AppHeader from '../../commonComponents/appheader/AppHeader'

import { Grid, Typography, Paper, Button, Hidden } from '@material-ui/core'
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
import CircularProgress from '@material-ui/core/CircularProgress';


const ProjectView = () => {

    const classes = useStyles();
    const { MasterDispatch } = useContext(MasterContext)
    const { get } = api();
    const history = useHistory()
    const { getItem } = utilFunctions;
    const { del } = api();
    const [showPopup, setShowPopup] = useState(false)
    const [contentLoaded, setContentLoaded] = useState(false)
    /**-------------------------------------------------- */
    const [profile, setProfile] = useState(null)
    const [id, setId] = useState(history.location.pathname.split('/')[3])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [notes, setNotes] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [noOfVideos, setNoOfVideos] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [agreement, setAgreement] = useState('')
    const [, setSponsorshipType] = useState(0)
    /**-------------------------------------------------- */

    // if(!id) setId(arr[-2])

    // useEffect(() => {
    //     const tempId = 
    //     if (!id) setId(tempId)
    // }, [])

    useEffect(() => {

        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        get(`sponsorships/${id}`, params, header, {})
            .then((res) => {
                console.log('hgd', res)
                setProfile(res.data)
                setId(res.data.id)
                setName(res.data.name)
                setDescription(res.data.description)
                setNotes(res.data.notes)
                setStartDate(res.data.startDate)
                setEndDate(res.data.endDate)
                setNoOfVideos(res.data.noOfVideos)
                setTotalAmount(res.data.totalAmount)
                setAgreement(res.data.agreement)
                setSponsorshipType(res.data.sponsorshipType)
                setContentLoaded(true)

            })
            .catch((err) => {
                console.log('response', err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function onEditClick() {
        console.log('hgd', profile)
        MasterDispatch({ type: 'SET_SELECTED_ITEM', value: profile })
        history.push(`/productivity/sponsorship/${id}/edit`)
    }

    function onDeleteClick() {
        setShowPopup(false)
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        del(`sponsorships/${id}`, params, header, {})
            .then((res) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'success', message: 'Sponsorship deleted!' }})
                history.push(`/productivity`)
                console.log('response', res)

            })
            .catch((err) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'error', message: 'Oops! error while deleting! Try again.' }})
                console.log('response', err)
            })

    }




    return (<>
        <AppHeader activeTab='productivity' />
        <Grid container className={classes.mainContainer}>
        {contentLoaded && <>
            <Grid item className={classes.mainTitle} xs={12}><Typography variant="h4">{name}</Typography></Grid>
            {/* col-1 */}
            <Grid container item xs={12} sm={6} className={classes.column1} direction='coloumn'>
                <Grid container item className={classes.propertyGroup} direction='column'>
                    <Typography variant='h5'>Description</Typography>
                    <Paper elevation={2} style={{ width: '100%' }} className={classes.paper}>
                        <Typography variant='body2' className={classes.propertyDescription}>{description}</Typography>
                    </Paper>
                </Grid>

                <Grid container item className={classes.propertyGroup} direction='column'>
                    <Typography variant='h5'>Notes</Typography>
                    <Paper elevation={2} style={{ width: '100%' }} className={classes.paper}>
                        <Typography variant='body2' className={classes.propertyDescription}>{notes}</Typography>
                    </Paper>
                </Grid>

                <Grid container item className={classes.propertyGroup} direction='row' style={{ margin: '30px 0px' }}>
                    <Grid item xs={3} >
                        <Typography variant='h5'>Start Date</Typography>
                        <Typography variant='body2'>{startDate}</Typography>
                    </Grid>
                    <Grid item xs={3} style={{ marginLeft: '10px' }}>
                        <Typography variant='h5'>End Date</Typography>
                        <Typography variant='body2'>{endDate}</Typography>
                    </Grid>
                </Grid>

                <Grid container item className={classes.propertyGroup} direction='row'>
                    <Grid item xs={5} >
                        <Typography variant='h5'>No of videos</Typography>
                        <Paper elevation={2} style={{ width: '100%' }} className={classes.paper}>
                            <Typography variant='body2' className={classes.propertyDescription}>{noOfVideos}</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={5} style={{ marginLeft: '20px' }}>
                        <Typography variant='h5'>Total amount</Typography>
                        <Paper elevation={2} style={{ width: '100%' }} className={classes.paper}>
                            <Typography variant='body2' className={classes.propertyDescription}>{totalAmount}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Hidden xsDown>
                    <Grid container item className={classes.propertyGroup} direction='row'>
                        <Grid xs={4}><Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} onClick={onEditClick} >Edit</Button></Grid>
                        <Grid xs={4}><Button variant="contained" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} style={{ marginLeft: '10px' }} onClick={() => setShowPopup(true)} >Delete</Button></Grid>
                    </Grid>
                </Hidden>


            </Grid>
            {/* col-1 */}

            {/* col-2 */}
            <Grid container item xs={12} sm={6} className={classes.column2} direction='coloumn'>
                <Grid container item className={classes.propertyGroup} direction='column'>
                    <Typography variant='h5'>Agreement</Typography>
                    <Paper elevation={2} style={{ width: '100%' }} className={classes.paper}>
                        <Typography variant='body2' className={classes.propertyDescription}><div dangerouslySetInnerHTML={{ __html: agreement }} /></Typography>
                    </Paper>
                </Grid>

                <Hidden smUp>
                    <Grid container item className={classes.propertyGroup} direction='row'>
                        <Grid xs={4}><Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} onClick={onEditClick} >Edit</Button></Grid>
                        <Grid xs={4}><Button variant="contained" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} style={{ marginLeft: '10px' }} onClick={() => setShowPopup(true)} >Delete</Button></Grid>
                    </Grid>
                </Hidden>


            </Grid>
            {/* col-2 */}
            </>}
        </Grid>

        {/* Delete Confirm Popup start */}
        <Dialog
            open={showPopup}
            onClose={() => setShowPopup(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Deleting the asset will remove all the datas including the script and sponsorship datas.
                    This is an irreversible process. Are you sure to continue?
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setShowPopup(false)} color="primary">
                    No
          </Button>
                <Button onClick={onDeleteClick} color="primary" autoFocus>
                    Yes
          </Button>
            </DialogActions>
        </Dialog>
        {!contentLoaded && <Grid item xs={12} className={classes.skeleton}>
            <div>
                <CircularProgress color="secondary" />
            </div>
        </Grid>}
    </>
    )
}

export default ProjectView