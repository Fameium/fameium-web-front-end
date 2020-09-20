import React, { useState } from 'react'
import ProjectFormStyledComponent from './Style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
import theme from '../../../data/theme.json'
import { Grid, Typography, makeStyles, TextField, Button } from '@material-ui/core'
// import SaveIcon from '@material-ui/icons/Save'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { useHistory } from 'react-router-dom'
import utilFunctions from '../../../utilityFunctions/localStorage'
import api from './../../../APIs/api'



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: '0px 8px',
        marginTop: '50px',
        width: '100%'
        // backgroundColor: 'yellow'
    },
    titleContainer: {
        borderBottom: '1px solid grey',
        marginBottom: '10px'
    },
    column1: {
        marginBottom: '20px',
        paddingRight: '10px',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '0px'
        }
    },
    column2: {
        marginBottom: '20px',
        paddingLeft: '10px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0px'
        }
    },
    TextField: {
        marginTop: '20px'
    },

}));



const ProjectForm = () => {

    const classes = useStyles();
    const history = useHistory();
    const { getItem } = utilFunctions;
    const { post, patch } = api();


    /**--------------------------------------------------- */
    const [mode, setMode] = useState('N')//Mode of Component - NEW/EDIT project
    /**--------------------------------------------------- */
    const [id, setId] = useState('') 
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [notes, setNotes] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [sponsorships, setSponsorships] = useState([])
    const [status, setStatus] = useState(0)
    const [script, setScript] = useState('')
    /**--------------------------------------------------- */
    if (history.location.pathname !== '/productivity/project/new') setMode('E') // For mode as 'NEW' Project

    if (mode === 'E') { //Setting initial values to edit.

    }

    function addProject() {
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        const body = {
            "name": name,
            "description": description,
            "motes": notes, //SM
            "start_date": startDate,
            "end_date": endDate,
            "script": script
            //sponsorships - Not handled yet.
        }
        post('projects', params, header, body)
        .then((res) => {
            console.log('response', res)
        })
        .catch((err) => {
            console.log('response', err)
        })


    }

    function editProject() {
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        const body = {
            "name": name,
            "description": description,
            "motes": notes, //SM
            "start_date": startDate,
            "end_date": endDate,
            "script": script
            //sponsorships - Not handled yet.
        }
        patch(`projects/${id}`, params, header, body)
        .then((res) => {
            console.log('response', res)
        })
        .catch((err) => {
            console.log('response', err)
        })
    }





    return (
        <ProjectFormStyledComponent theme={theme}>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
            <Grid container className={classes.mainContainer} >
                <Grid item container className={classes.titleContainer} alignItems='flex-end'  >
                    <Grid item xs={12} sm={6} > <Typography variant="h5"  > Add New Project</Typography> </Grid>
                    {/* <Grid item xs={12} sm={6} > <Typography variant="caption"> LastdkjfhEdited: 3746286238</Typography> </Grid> */}
                </Grid>

                <Grid item container xs={12} sm={6} className={classes.column1} style={{ backgroundColor: '' }} >
                    <Grid item xs={12}> <TextField label="Project Name" color="secondary" fullWidth value={name} onChange={(e) => setName(e.target.value)} /> </Grid>
                    <Grid item xs={12}> <TextField label="Description" multiline className={classes.TextField} color='secondary' fullWidth value={description} onChange={(e) => setDescription(e.target.value)} /> </Grid>
                    <Grid item xs={12}> <TextField label="Notes" multiline className={classes.TextField} color='secondary' fullWidth value={notes} onChange={(e) => setNotes(e.target.value)} /> </Grid>
                    <Grid container item alignItems='flex-end'>
                        <Grid xs={4} item style={{ paddingRight: '10px' }}> <TextField label="Start Date" InputLabelProps={{ shrink: true }} type='date' fullWidth className={classes.TextField} color='secondary' value={startDate} onChange={(e) => setStartDate(e.target.value)} /> </Grid>
                        <Grid xs={8} item> <Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} >Sponsorship</Button> </Grid>
                    </Grid>
                    <Grid container item alignItems='flex-end'>
                        <Grid xs={4} item style={{ paddingRight: '10px' }}> <TextField label="End Date" InputLabelProps={{ shrink: true }} type='date' defaultValue="2017-05-24" className={classes.TextField} color='secondary' fullWidth value={endDate} onChange={(e) => setEndDate(e.target.value)} /> </Grid>
                        <Grid xs={4} item style={{ paddingRight: '10px' }}> <Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} >Status</Button> </Grid>
                        <Grid xs={4} item style={{ paddingLeft: '10px' }}><Button variant="outlined" color="secondary" size="large" varient='filled' className={classes.TextField} fullWidth startIcon={<MonetizationOnIcon />} onClick={mode === 'N' ? addProject : editProject} >SAVE</Button></Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={6} className={classes.column2} alignContent='flex-start' >
                    <Grid item container padding={2} alignItems='center' style={{ marginBottom: '10px' }}>
                        <Grid item xs={4} > <Typography  >Script</Typography> </Grid>
                        <Grid item container xs={8} justify='flex-end' >
                            <Grid item > <Button variant="contained" color="secondary" size="small" fullWidth startIcon={<MonetizationOnIcon />} >Import</Button> </Grid>
                            <Grid item style={{ marginLeft: '10px' }} > <Button variant="outlined" color="secondary" size="small" fullWidth startIcon={<MonetizationOnIcon />} >Export</Button> </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ height: '100%' }} > <ReactQuill style={{ height: '100%' }} value={script} onChange={setScript} /> </Grid>
                </Grid>



            </Grid>
        </ProjectFormStyledComponent>
    )
}

export default ProjectForm