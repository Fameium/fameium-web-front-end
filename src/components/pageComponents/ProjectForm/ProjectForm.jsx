import React, { useState, useContext, useEffect } from 'react'
import ProjectFormStyledComponent from './Style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
// import theme from '../../../data/theme.json'
import { Grid, Typography, makeStyles, useTheme, TextField, Button, Input, Hidden } from '@material-ui/core'
// import SaveIcon from '@material-ui/icons/Save'
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { useHistory } from 'react-router-dom'
import utilFunctions from '../../../utilityFunctions/localStorage'
import api from './../../../APIs/api'
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


//upto this deleted

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '70px',
        width: '100%',
        padding: '0px 0px 130px'
        // backgroundColor: 'yellow'
    },
    titleContainer: {
        padding: '20px 40px',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 10px 0px',
            marginBottom: '10px'
        }
    },
    column1: {
        padding: '20px 40px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 10px'
        }
    },
    column2: {
        padding: '20px 10px',


    },
    TextField: {
        marginTop: '20px'
    },
    section: {
        margin: '10px 0px 5px 0px',
    },
    formControl: {
        // margin: theme.spacing(1),
        width: '100%',
        marginRight: '10px'
    }

}));



const ProjectForm = () => {

    const classes = useStyles();
    const theme = useTheme();

    const history = useHistory();
    const { getItem } = utilFunctions;
    const { post, patch, get } = api();
    const { selectedItem, MasterDispatch } = useContext(MasterContext)
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
    const [activeSponsors, setActiveSponsors] = useState([]);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                // width: 250,
            },
        },
    };

    const handleChange = (event) => {
        setActiveSponsors(event.target.value);
    };

    // const handleChangeMultiple = (event) => {
    //     const { options } = event.target;
    //     const value = [];
    //     for (let i = 0, l = options.length; i < l; i += 1) {
    //         if (options[i].selected) {
    //             value.push(options[i].value);
    //         }
    //     }
    //     setPersonName(value);
    // };

    /**--------------------------------------------------- */

    useEffect(() => {

        if (history.location.pathname !== '/productivity/project/new') { //Setting initial values to edit.
            // const arr = history.location.pathname.split('/')
            // setId(arr(-2))
            if (mode !== 'E') setMode('E') // For mode as 'NEW' Project
            if (selectedItem) {
                if (id === '') setId(selectedItem.id)
                if (name === '') setName(selectedItem.name)
                if (description === '') setDescription(selectedItem.description)
                if (notes === '') setNotes(selectedItem.notes)
                if (startDate === '') setStartDate(selectedItem.startDate)
                if (endDate === '') setEndDate(selectedItem.endDate)
                if (sponsorships === []) setSponsorships(selectedItem.sponsorships)
                if (status === 0) setStatus(selectedItem.status)
                if (script === '') setScript(selectedItem.script)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItem])



    function addProject() {
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        const body = {
            "name": name,
            "description": description,
            "notes": notes, //SM
            "startDate": startDate,
            "endDate": endDate,
            "sponsorships": activeSponsors,
            "script": script,
            "status": status
        }
        post('projects', params, header, body)
            .then((res) => {
                history.push('/productivity')
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'success', message: 'Project added succesfully' }})

                console.log('response', res)
            })
            .catch((err) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'error', message: 'Error while adding project.' }})
                console.log('response', err)
            })


    }


    function saveEditProject() {
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        const body = {
            "name": name,
            "description": description,
            "notes": notes, //SM
            "startDate": startDate,
            "endDate": endDate,
            "sponsorships": activeSponsors,
            "script": script,
            "status": status
        }
        patch(`projects/${id}`, params, header, body)
            .then((res) => {
                history.push('/productivity')
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'success', message: 'Project updated succesfully' }})
                console.log('response', res)
            })
            .catch((err) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'error', message: 'Error while updating project.' }})
                console.log('response', err)
            })
    }

    const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
    const header = { Authorization: `token ${getItem('auth-data').token}` }

    const [allSponsors, setAllSponsors] = useState([])


    useEffect(() => {
        get(`sponsorships`, params, header, {}).then((res) => {
            setAllSponsors(res.data.map((e) => e.name))
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }



    return (
        <ProjectFormStyledComponent theme={theme}>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
            <Grid container className={classes.mainContainer} justify='flex-start' >
                <Grid item container className={classes.titleContainer} alignItems='flex-end'  >
                    <Grid item xs={12} sm={6} > <Typography variant="h4" color='secondary'  > Add New Project</Typography> </Grid>
                    {/* <Grid item xs={12} sm={6} > <Typography variant="caption"> LastdkjfhEdited: 3746286238</Typography> </Grid> */}
                </Grid>

                {/* //uptohe */}
                <Grid item container xs={12} sm={6} className={classes.column1} style={{ backgroundColor: '' }}>
                    <Grid item fullWidth xs={12} className={classes.section}> <TextField label="Project Name" color="secondary" fullWidth value={name} onChange={(e) => setName(e.target.value)} /> </Grid>
                    <Grid item fullWidth xs={12} className={classes.section}> <TextField label="Description" multiline className={classes.TextField} color='secondary' fullWidth value={description} onChange={(e) => setDescription(e.target.value)} /> </Grid>
                    <Grid item fullWidth xs={12} className={classes.section}> <TextField label="Notes" multiline className={classes.TextField} color='secondary' fullWidth value={notes} onChange={(e) => setNotes(e.target.value)} /> </Grid>

                    <Hidden smUp >  {/** for mobile  */}
                        <Grid item container xs={12} direction='row' className={classes.section}>
                            <Grid xs={6} item style={{ paddingRight: '20px' }}> <TextField size='small' label="Start Date" variant="outlined" InputLabelProps={{ shrink: true }} type='date' fullWidth className={classes.TextField} color='secondary' value={startDate} onChange={(e) => setStartDate(e.target.value)} /> </Grid>
                            <Grid xs={6} item style={{ paddingRight: '20px' }}> <TextField size='small' label="Start Date" variant="outlined" InputLabelProps={{ shrink: true }} type='date' fullWidth className={classes.TextField} color='secondary' value={endDate} onChange={(e) => setStartDate(e.target.value)} /> </Grid>
                        </Grid>
                        <Grid xs={12} item className={classes.section} style={{ margin: '15px 0px 10px' }} >
                            <FormControl variant='outlined' className={classes.formControl} color="secondary">
                                <InputLabel id="demo-mutiple-name-label">Sponsorships</InputLabel>
                                <Select
                                    labelId="demo-mutiple-name-label"
                                    id="demo-mutiple-name"
                                    multiple
                                    value={activeSponsors}
                                    onChange={handleChange}
                                    input={<Input />}
                                    MenuProps={MenuProps}

                                >
                                    {allSponsors.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, activeSponsors, theme)}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Hidden>

                    <Hidden xsDown> {/** for desktop  */}
                        <Grid container item alignItems='flex-end' className={classes.section}>
                            <Grid xs={4} item style={{ paddingRight: '20px' }}> <TextField size='small' label="Start Date" variant="outlined" InputLabelProps={{ shrink: true }} type='date' fullWidth className={classes.TextField} color='secondary' value={startDate} onChange={(e) => setStartDate(e.target.value)} /> </Grid>
                            {/* <Grid xs={8} item> <Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} >Sponsorship</Button> </Grid> */}
                            <Grid xs={8} item>
                                <FormControl variant='outlined' className={classes.formControl} color="secondary">
                                    <InputLabel id="demo-mutiple-name-label">Sponsorships</InputLabel>
                                    <Select
                                        labelId="demo-mutiple-name-label"
                                        id="demo-mutiple-name"
                                        multiple
                                        value={activeSponsors}
                                        onChange={handleChange}
                                        input={<Input />}
                                        MenuProps={MenuProps}

                                    >
                                        {allSponsors.map((name) => (
                                            <MenuItem key={name} value={name} style={getStyles(name, activeSponsors, theme)}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container item alignItems='flex-end' className={classes.section}>
                            <Grid xs={4} item style={{ paddingRight: '20px' }}> <TextField size='small' label="End Date" variant="outlined" InputLabelProps={{ shrink: true }} type='date' defaultValue="2017-05-24" className={classes.TextField} color='secondary' fullWidth value={endDate} onChange={(e) => setEndDate(e.target.value)} /> </Grid>
                            {/* <Grid xs={4} item style={{ paddingRight: '20px' }}> <Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<AssistantIcon />} >Status</Button> </Grid> */}
                            <Grid xs={4} item style={{ paddingRight: '20px' }}>
                                <FormControl variant="outlined" className={classes.formControl} color='secondary' size='small'>
                                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        label="Age"
                                    >
                                        <MenuItem value={0}>To-Do</MenuItem>
                                        <MenuItem value={1}>Planning</MenuItem>
                                        <MenuItem value={2}>Scripting</MenuItem>
                                        <MenuItem value={3}>Production</MenuItem>
                                        <MenuItem value={4}>Editing</MenuItem>
                                        <MenuItem value={5}>Completed</MenuItem>
                                        <MenuItem value={6}>published</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={4} item style={{ paddingLeft: '20px' }}><Button variant="contained" color="secondary" size="large" varient='filled' className={classes.TextField} fullWidth startIcon={<SaveIcon />} onClick={mode === 'N' ? addProject : saveEditProject} >SAVE</Button></Grid>
                        </Grid>
                    </Hidden>
                </Grid>
                {/* --c2 */}
                <Grid item container xs={12} sm={6} className={classes.column2} alignContent='flex-start' >
                    <Grid item container padding={2} alignItems='center' style={{ marginBottom: '10px' }}>
                        <Grid item xs={2} > <Typography variant='h5' >Script</Typography> </Grid>
                        <Grid item container xs={10} justify='flex-end' >
                            <Grid item > <Button variant="contained" color="secondary" size="small" fullWidth startIcon={<CloudDownloadIcon />} >Import</Button> </Grid>
                            <Grid item style={{ marginLeft: '10px' }} > <Button variant="outlined" color="secondary" size="small" fullWidth startIcon={<CloudUploadIcon />} >Export</Button> </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ height: '80%' }} > <ReactQuill style={{ height: '100%' }} value={script} onChange={setScript} /> </Grid>
                    <Hidden smUp >  {/** for mobile  */}
                        <Grid item container xs={12} style={{ marginTop: '50px' }} alignItems='flex-end' >
                            <Grid item xs={6}>
                                <FormControl variant="outlined" className={classes.formControl} color='secondary' size='small'>
                                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        label="Age"
                                    >
                                        <MenuItem value={0}>To-Do</MenuItem>
                                        <MenuItem value={1}>Planning</MenuItem>
                                        <MenuItem value={2}>Scripting</MenuItem>
                                        <MenuItem value={3}>Production</MenuItem>
                                        <MenuItem value={4}>Editing</MenuItem>
                                        <MenuItem value={5}>Completed</MenuItem>
                                        <MenuItem value={6}>published</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} style={{ paddingLeft: '20px' }}>
                                <Button variant="contained" color="secondary" size="large" varient='filled' className={classes.TextField} fullWidth startIcon={<SaveIcon />} onClick={mode === 'N' ? addProject : saveEditProject} >SAVE</Button>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>



            </Grid>
        </ProjectFormStyledComponent>
    )
}

export default ProjectForm