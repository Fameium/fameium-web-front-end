import React, { useState, useContext, useEffect } from 'react'
// import ProjectFormStyledComponent from './style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
// import theme from '../../../data/theme.json'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
// import SaveIcon from '@material-ui/icons/Save'
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { useHistory } from 'react-router-dom'
import utilFunctions from '../../../utilityFunctions/localStorage'
import api from '../../../APIs/api'
import { MasterContext } from '../../../context/MasterContext'
// import AssistantIcon from '@material-ui/icons/Assistant';
import SaveIcon from '@material-ui/icons/Save';
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import InputLabel from '@material-ui/core/InputLabel'/;
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
// import Select from '@material-ui/core/Select';
import { useStyles } from './style'





const IdeaForm = () => {

    const classes = useStyles();
    // const theme = useTheme();

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
    /**--------------------------------------------------- */

    useEffect(() => {

        if (history.location.pathname !== '/productivity/idea/new') { //Setting initial values to edit.
            // const arr = history.location.pathname.split('/')
            // setId(arr(-2))
            if (mode !== 'E') setMode('E') // For mode as 'NEW' Project
            if (selectedItem) {
                setId(selectedItem.id)
                setName(selectedItem.name)
                setDescription(selectedItem.description)
               setNotes(selectedItem.notes) //SM
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItem])



    function addIdea() {
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        const body = {
            "name": name,
            "description": description,
            "notes": notes, 
        }
        post('ideas', params, header, body)
            .then((res) => {
                history.push('/productivity')
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'success', message: 'New idea added' }})
                console.log('response', res)
            })
            .catch((err) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'error', message: 'Error while adding Idea' }})
                console.log('response', err)
            })


    }


    function saveEditIdea() {
        const params = { tenant_id: getItem('auth-data').user.tenants[0].id }
        const header = { Authorization: `token ${getItem('auth-data').token}` }
        const body = {
            "name": name,
            "notes": notes,
            "description": description
        }
        patch(`ideas/${id}`, params, header, body)
            .then((res) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'success', message: 'Succesfully updated idea. ' }})
                history.push('/productivity')
                console.log('response', res)
            })
            .catch((err) => {
                MasterDispatch({ type: 'SET_SNACK_BAR', value: {bool: true, severity: 'error', message: 'Error while updating idea' }})
                console.log('response', err)
            })

    }
    return (<>
        <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
        <Grid container className={classes.mainContainer}>
            {/* col-1 */}
            <Grid container item xs={12} sm={6}>
                <Grid item xs={12} ><Typography variant='h4' >{mode === 'N' ? 'Add new idea' : 'Edit Idea'}</Typography> </Grid>
                <Grid item xs={12} className={classes.inputMargin} ><TextField label="Idea name" color="secondary" fullWidth value={name} onChange={(e) => setName(e.target.value)} /></Grid>
                <Grid item xs={12} className={classes.inputMargin} ><TextField label="Description" color="secondary" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} /></Grid>
                <Grid item xs={12} className={classes.inputMargin} ><TextField label="Notes" color="secondary" fullWidth value={notes} onChange={(e) => setNotes(e.target.value)} /></Grid>
                <Grid item xs={5} className={classes.inputMargin} >
    <Button variant="contained" color="secondary" size="large" varient='filled' fullWidth startIcon={<SaveIcon />} onClick={mode === 'N' ? addIdea : saveEditIdea} >{mode === 'N' ? 'SAVE' : 'UPDATE'}</Button>
                </Grid>

            </Grid>
            {/* col-1 */}
            {/* col-2 */}
            <Grid container item xs={12} sm={6}>

            </Grid>
            {/* col-2 */}
        </Grid>
    </>
    )
}

export default IdeaForm