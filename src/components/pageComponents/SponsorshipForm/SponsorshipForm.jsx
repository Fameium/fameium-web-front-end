import React, { useState, useContext, useEffect } from 'react'
import ProjectFormStyledComponent from './Style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
// import theme from '../../../data/theme.json'
import { Grid, Typography, makeStyles, useTheme, TextField, Button, Input, Hidden } from '@material-ui/core'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
// import SaveIcon from '@material-ui/icons/Save'
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { useHistory } from 'react-router-dom'
import utilFunctions from '../../../utilityFunctions/localStorage'
import api from '../../../APIs/api'
import { MasterContext } from '../../../context/MasterContext'
// import AssistantIcon from '@material-ui/icons/Assistant';
import SaveIcon from '@material-ui/icons/Save';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import { useStyles } from './Style'



const SponsorshipForm = () => {

    const classes = useStyles();
    const theme = useTheme();

    const history = useHistory();
    const { getItem } = utilFunctions;
    const { post, patch } = api();
    const { selectedItem, MasterDispatch  } = useContext(MasterContext)
    /**--------------------------------------------------- */
    const [mode, setMode] = useState('N')//Mode of Component - NEW/EDIT project
    /**--------------------------------------------------- */
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [notes, setNotes] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [noOfVideos, setNoOfVideos] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [agreement, setAgreement] = useState('')
    const [sponsorshipType, setSponsorshipType] = useState(0)
    /**--------------------------------------------------- */

    useEffect(() => {

        if (history.location.pathname !== '/productivity/sponsorship/new') { //Setting initial values to edit. //SM
            // const arr = history.location.pathname.split('/')
            // setId(arr(-2))
            if (mode !== 'E') setMode('E') // For mode as 'NEW' Project
            console.log('hgd', selectedItem)
            if (selectedItem) {
                if (id === '') setId(selectedItem.id)
                if (name === '') setName(selectedItem.name)
                if (description === '') setDescription(selectedItem.description)
                if (notes === '') setNotes(selectedItem.notes)//SM
                if (startDate === '') setStartDate(selectedItem.startDate)
                if (endDate === '') setEndDate(selectedItem.endDate)
                if (noOfVideos === 0) setNoOfVideos(selectedItem.noOfVideos)
                if (totalAmount === 0) setTotalAmount(selectedItem.totalAmount)
                if (agreement === '') setAgreement(selectedItem.agreement)
                if (sponsorshipType === 0) setSponsorshipType(selectedItem.sponsorshipType)

            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItem])



    function addSponsorship() {
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        const body = {
            "name": name,
            "description": description,
            "notes": notes,
            "startDate": startDate,
            "endDate": endDate,
            "noOfVideos": noOfVideos,
            "totalAmount": totalAmount,
            "sponsorshipType": sponsorshipType,
            "agreement": agreement
           
        }
        post('sponsorships', params, header, body)
            .then((res) => {
                history.push('/productivity')
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'success', message: 'New sponsorship added.' }})
                console.log('response', res)
            })
            .catch((err) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'error', message: 'Oops! error while adding sponsorship! Try again.' }})
                console.log('response', err)
            })


    }


    function saveEditSponsorship() {
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        const body = {
            "name": name,
            "description": description,
            "notes": notes,
            "startDate": startDate,
            "endDate": endDate,
            "noOfVideos": noOfVideos,
            "totalAmount": totalAmount,
            "sponsorshipType": sponsorshipType,
            "agreement": agreement
        }
        patch(`sponsorships/${id}`, params, header, body)
            .then((res) => {
                history.push('/productivity')
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'success', message: 'Sponsorship updated!' }})
                console.log('response', res)
            })
            .catch((err) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'error', message: 'Oops! error while updating sponsorship! Try again.' }})
                console.log('response', err)
            })
    }


    return (
        <>
            <AppHeader />
            <Grid container className={classes.mainContainer} >
                <Grid item xs={12} className={classes.mainTitle} >
                    <Typography variant='h4'>{mode === 'N' ? 'Add new Sponsorship' : 'Edit sponsorship'}</Typography>
                </Grid>
                {/* col-1 */}
                <Grid container item xs={12} sm={5} className={classes.column1} >
                    <Grid item xs={12} className={classes.inputMargin} ><TextField label="Sponsor name" color="secondary" fullWidth value={name} onChange={(e) => setName(e.target.value)} /></Grid>
                    <Grid item xs={12} className={classes.inputMargin} ><TextField label="Description" color="secondary" multiline fullWidth value={description} onChange={(e) => setDescription(e.target.value)} /></Grid>
                    <Grid item xs={12} className={classes.inputMargin} ><TextField label="Notes" color="secondary" multiline fullWidth value={notes} onChange={(e) => setNotes(e.target.value)} /></Grid>
                    <Grid container item xs={12}>
                        <Grid item container xs={5}>
                            <TextField size='small' label="Start Date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} type='date' className={classes.inputMargin} color='secondary' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField size='small' label="End Date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} type='date' className={classes.inputMargin} style={{ marginLeft: '20px' }} color='secondary' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} className={classes.inputMargin} >
                        <Grid item container xs={5}>
                            <TextField size='small' color="secondary" id="outlined-number" label="No of Videos" type="number" InputLabelProps={{ shrink: true, }} variant="outlined" value={noOfVideos} onChange={(e) => setNoOfVideos(e.target.value)} />
                        </Grid>
                        <Grid item xs={5}>
                            <FormControl fullWidth variant="outlined" size='small' style={{ marginLeft: '20px' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={totalAmount}
                                    onChange={(e) => setTotalAmount(e.target.value)}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                    color="secondary"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item xs={5} className={classes.inputMargin}>
                            <Button variant="contained" color="secondary" size="large" varient='filled' fullWidth startIcon={<SaveIcon />} onClick={mode === 'N' ? addSponsorship : saveEditSponsorship} >{mode === 'N' ? 'SAVE' : 'UPDATE'}</Button>
                        </Grid>
                    </Hidden>
                </Grid>
                {/* col-1 */}

                {/* col-2 */}
                <Grid container item xs={12} sm={5} className={classes.column2}  alignContent='flex-start'>
                    <Grid item xs={2} > <Typography variant='h5' >Agreement</Typography> </Grid>
                    <Grid item xs={12} className={classes.agreementMargin} style={{ height: '90%' }} > <ReactQuill style={{ height: '90%', width: '100%' }} value={agreement} onChange={setAgreement} /> </Grid>
                    <Hidden smUp>
                        <Grid item xs={5} className={classes.inputMargin}>
                            <Button variant="contained" color="secondary" size="large" varient='filled' fullWidth startIcon={<SaveIcon />} onClick={mode === 'N' ? addSponsorship : saveEditSponsorship} >{mode === 'N' ? 'SAVE' : 'UPDATE'}</Button>
                        </Grid>
                    </Hidden>
                </Grid>
                {/* col-2 */}




            </Grid>
        </>
    )
}

export default SponsorshipForm