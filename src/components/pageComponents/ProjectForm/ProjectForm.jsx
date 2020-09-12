import React, { useState } from 'react'
import ProjectFormStyledComponent from './Style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
import theme from '../../../data/theme.json'
import { Grid, Typography, makeStyles, TextField, Button } from '@material-ui/core'
// import SaveIcon from '@material-ui/icons/Save'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {Editor, EditorState} from 'draft-js';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6


const useStyles = makeStyles({
    mainContainer: {
        padding: '0px 20px',
        marginTop: '50px',
        // backgroundColor: 'yellow'
    },
    titleContainer: {
        borderBottom: '1px solid grey',
    },
    column1: {

    },
    column2: {

    },
    TextField: {
        marginTop: '20px'
    },

});



const ProjectForm = () => {

    const classes = useStyles();
   


    return (
        <ProjectFormStyledComponent theme={theme}>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
            <Grid container className={classes.mainContainer} spacing={2} >
                <Grid item container xs = {12} className={classes.titleContainer} alignItems='flex-end' >
                    <Grid item xs={12} sm={6}> <Typography variant="h5"  > Add New Project</Typography> </Grid>
                    <Grid item xs={12} sm={6} align='right'> <Typography variant="caption"> LastdkjfhEdited: 3746286238</Typography> </Grid>
                </Grid>
                <Grid item container sm={6} xs={12} className={classes.column1} direction='column' >
                    <TextField label="Project Name" className={classes.TextField} color="secondary" />
                    <TextField label="Description" multiline className={classes.TextField} color='secondary' />
                    <TextField label="Notes" multiline className={classes.TextField} color='secondary' />
                    <Grid container item xs={12} alignItems='flex-end'>
                        <Grid xs={4} item style={{paddingRight: '10px'}}> <TextField label="Start Date" defaultValue="2017-05-24"  type='date' fullWidth  className={classes.TextField} color='secondary' /> </Grid>
                        <Grid xs={8} item> <Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} >Sponsorship</Button> </Grid>
                    </Grid>
                    <Grid container item xs={12} alignItems='flex-end'>
                        <Grid xs={4} item style={{paddingRight: '10px'}}> <TextField label="Start Date" type='date' defaultValue="2017-05-24"  className={classes.TextField} color='secondary' fullWidth /> </Grid>
                        <Grid xs={4} item style={{paddingRight: '10px'}}> <Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} >Status</Button> </Grid>
                        <Grid xs={4} item style={{paddingLeft: '10px'}}><Button variant="outlined" color="secondary" size="large" varient='filled' className={classes.TextField} fullWidth startIcon={<MonetizationOnIcon />} >SAVE</Button></Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.column2}>
                <ReactQuill style={{height: '100%'}} />
                </Grid>
                

            </Grid>
        </ProjectFormStyledComponent>
    )
}

export default ProjectForm