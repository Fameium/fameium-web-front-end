import React, { useState, useContext, useEffect } from 'react'
import ProjectFormStyledComponent from './Style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
import theme from '../../../data/theme.json'
import { Grid, Typography, makeStyles, useTheme, TextField, Button, Input } from '@material-ui/core'
// import SaveIcon from '@material-ui/icons/Save'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { useHistory } from 'react-router-dom'
import utilFunctions from '../../../utilityFunctions/localStorage'
import api from './../../../APIs/api'
import { MasterContext } from '../../../context/MasterContext'
import AssistantIcon from '@material-ui/icons/Assistant';
import SaveIcon from '@material-ui/icons/Save';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';




const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: '0px 20px 0px 35px',
        marginTop: '80px',
        marginBottom: '100px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 10px ',
        }
        // backgroundColor: 'yellow'
    },
    titleContainer: {
        borderBottom: '1px solid #D3D3D3',
        padding: '0px 0px 10px 0px',
        marginBottom: '20px'
    },
    column1: {
        marginBottom: '20px',
        paddingRight: '10px',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '0px'
        },
        height: '100%'
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
    const { post, patch } = api();
    const { selectedItem } = useContext(MasterContext)
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
    const [status, setStatus] = useState(null)
    const [script, setScript] = useState('')
    /**--------------------------------------------------- */
    const [personName, setPersonName] = useState([]);

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
        setPersonName(event.target.value);
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
                if (notes === '') setNotes(selectedItem.motes)//SM
                if (startDate === '') setStartDate(selectedItem.startDate)
                if (endDate === '') setEndDate(selectedItem.endDate)
                if (sponsorships === []) setSponsorships(selectedItem.sponsorships)
                if (status === null) setStatus(selectedItem.status)
                if (script === '') setScript(selectedItem.script)
            }
        }
    }, [selectedItem])



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

    function saveEditProject() {
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

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];


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
                    <Grid item xs={12} sm={6} > <Typography variant="h5"  > Add New Project</Typography> </Grid>
                    {/* <Grid item xs={12} sm={6} > <Typography variant="caption"> LastdkjfhEdited: 3746286238</Typography> </Grid> */}
                </Grid>

                <Grid item container xs={12} sm={6} className={classes.column1} style={{ backgroundColor: '' }} direction='column' justify='flex-start'>
                    <Grid item xs={12} className={classes.section}> <TextField label="Project Name" color="secondary" fullWidth value={name} onChange={(e) => setName(e.target.value)} /> </Grid>
                    <Grid item xs={12} className={classes.section}> <TextField label="Description" multiline className={classes.TextField} color='secondary' fullWidth value={description} onChange={(e) => setDescription(e.target.value)} /> </Grid>
                    <Grid item xs={12} className={classes.section}> <TextField label="Notes" multiline className={classes.TextField} color='secondary' fullWidth value={notes} onChange={(e) => setNotes(e.target.value)} /> </Grid>

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
                                    value={personName}
                                    onChange={handleChange}
                                    input={<Input />}
                                    MenuProps={MenuProps}

                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
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
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={0}>Scripting</MenuItem>
                                    <MenuItem value={1}>Production</MenuItem>
                                    <MenuItem value={2}>Completed</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={4} item style={{ paddingLeft: '20px' }}><Button variant="contained" color="secondary" size="large" varient='filled' className={classes.TextField} fullWidth startIcon={<SaveIcon />} onClick={mode === 'N' ? addProject : saveEditProject} >SAVE</Button></Grid>
                    </Grid>
                </Grid>
                {/* --c2 */}
                <Grid item container xs={12} sm={6} className={classes.column2} alignContent='flex-start' >
                    <Grid item container padding={2} alignItems='center' style={{ marginBottom: '10px' }}>
                        <Grid item xs={4} > <Typography  >Script</Typography> </Grid>
                        <Grid item container xs={8} justify='flex-end' >
                            <Grid item > <Button variant="contained" color="secondary" size="small" fullWidth startIcon={<CloudDownloadIcon />} >Import</Button> </Grid>
                            <Grid item style={{ marginLeft: '10px' }} > <Button variant="outlined" color="secondary" size="small" fullWidth startIcon={<CloudUploadIcon />} >Export</Button> </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ height: '80%' }} > <ReactQuill style={{ height: '100%' }} value={script} onChange={setScript} /> </Grid>
                </Grid>



            </Grid>
        </ProjectFormStyledComponent>
    )
}

export default ProjectForm