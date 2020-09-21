import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AppHeader from '../../commonComponents/appheader/AppHeader'

import { Grid, Typography, Paper, Button, Hidden } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import useStyles from './style.jsx'
import { MasterContext } from '../../../context/MasterContext'
import api from './../../../APIs/api'
import utilFunctions from '../../../utilityFunctions/localStorage'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';



const ProjectView = () => {

    const c = useStyles();
    const { selectedItem, MasterDispatch } = useContext(MasterContext)
    const { get } = api();
    const history = useHistory()
    const { getItem } = utilFunctions;
    /**-------------------------------------------------- */
    const [profile, setProfile] = useState(null)
    const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [notes, setNotes] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [sponsorships, setSponsorships] = useState([])
    const [status, setStatus] = useState(0)
    const [script, setScript] = useState('')
    /**-------------------------------------------------- */

    // if(!id) setId(arr[-2])

    useEffect(() => {
        const tempId = history.location.pathname.split('/')[3]
        if (!id) setId(tempId)
    }, [])

    useEffect(() => {

        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        get(`projects/${id}`, params, header, {})
            .then((res) => {
                setProfile(res.data)
                setId(res.data.id)
                setName(res.data.name)
                setDescription(res.data.description)
                setNotes(res.data.motes)
                setStartDate(res.data.startDate)
                setEndDate(res.data.endDate)
                setSponsorships(res.data.sponsorships)
                setStatus(res.data.status)
                setScript(res.data.script)
            })
            .catch((err) => {
                console.log('response', err)
            })
    }, [id])


    function onEditClick() {
        MasterDispatch({ type: 'SET_SELECTED_ITEM', value: profile })
        history.push(`/productivity/project/${id}/edit`)
    }

    function onDeleteClick() {

    }





    return (<>
        <AppHeader activeTab='productivity' />
        <Grid container className={c.mainWrapper} variant="outlined">
            {/* ------------------ header =-------------------------------- */}
            <Grid item container sm={12} alignItems='center' className={c.titleContainer}>
                <ArrowRightIcon /> <Typography variant='h6' className={c.mainTitle}>{name}</Typography>
                <Typography variant='caption' className={c.lastEdited}>LAST EDITED</Typography>
            </Grid>
            {/* ------------------------- header end-------------------------- */}

            {/* -------------col 1--------------------------------- */}
            <Grid item container xs={12} sm={6} className={c.column1}>
                <Grid item xs={12}>
                    <Paper className={`${c.paper} ${c.status}`} elevation={1} color='secondary'>
                        <Typography variant='caption' style={{ width: '100%' }}  ><b>STATUS :</b></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' className={c.heading} >DESCRIPTION</Typography>

                    <Paper className={c.paper} elevation={1}>
                        <Typography>{description}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h6' className={c.heading}>NOTES</Typography>

                    <Paper className={c.paper} elevation={2}>
                        <Typography>{notes}</Typography>
                    </Paper>
                </Grid>

                {/* col-1 row-3 dates */}
                <Grid item container sm={12} className={c.paper}>
                    <Grid item container direction='column' xs={6}>
                        <Typography variant='h6'>Start Date</Typography>
                        {/* <Typography variant='caption'>{startDate}</Typography> */}
                        <Typography variant='caption'>21- 05-2020</Typography>
                    </Grid>
                    <Grid item container direction='column' className={c.endDate} xs={6} >
                        <Typography variant='h6'>End Date</Typography>
                        {/* <Typography variant='caption'>{endDate}</Typography> */}
                        <Typography variant='caption'>04-07-2020</Typography>
                    </Grid>
                </Grid>
                {/* c1 r4 sponsors */}
                <Typography variant='h6' className={c.heading}>Sponsorships</Typography>
                <Grid item container sm={12}>
                    <Grid item container direction='column'>
                        <Paper className={c.paper} elevation={2}> <Typography variant='caption'>Sponsorships</Typography> </Paper>
                        <Paper className={c.paper} elevation={2}> <Typography variant='caption'>Sponsorships</Typography> </Paper>
                        <Paper className={c.paper} elevation={2}> <Typography variant='caption'>Sponsorships</Typography> </Paper>
                    </Grid>
                </Grid>
                {/* c1 r5 buttons */}
                <Hidden smDown>

                    <Grid item container sm={12} className={`${c.paper} ${c.desktopOnly}`}>
                        <Grid item > <Button variant="contained" color="secondary" size="small" fullWidth startIcon={<MonetizationOnIcon />} onClick={onEditClick}>Edit</Button> </Grid>
                        <Grid item className={c.secondButton} > <Button variant="outlined" color="secondary" size="small" fullWidth startIcon={<MonetizationOnIcon />}  onClick={onDeleteClick} >Delete</Button> </Grid>

                    </Grid>
                </Hidden>

            </Grid>
            {/* ---------- col 1 ------------------------------------------- */}

            {/* // -----col 2 ----------------------------------------------- */}
            <Grid item container xs={12} sm={6} className={c.column2} justify='flex-start' alignContent='flex-start'>
                <Typography variant='h6' className={c.heading}>SCRIPT</Typography>

                <Grid item container xs={12}>
                    <Paper className={c.paper} elevation={2} >
                        <Typography variant='caption' className={c.endDate}>{script}</Typography>
                    </Paper>

                </Grid>
                <Hidden smUp>
                    <Grid item container sm={12} className={`${c.paper} ${c.mobileOnly}`}>
                        <Grid item > <Button variant="contained" color="secondary" size="small" fullWidth startIcon={<MonetizationOnIcon />} onClick={onEditClick} >Edit</Button> </Grid>
                        <Grid item className={c.secondButton} > <Button variant="outlined" color="secondary" size="small" fullWidth startIcon={<MonetizationOnIcon />} onClick={onDeleteClick} >Delete</Button> </Grid>

                    </Grid>
                </Hidden>

            </Grid>
            {/* -------------col 2 --------------------------------------------- */}
        </Grid >
    </>
    )
}

export default ProjectView