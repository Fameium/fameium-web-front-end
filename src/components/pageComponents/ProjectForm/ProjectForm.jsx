import React from 'react'
import ProjectFormStyledComponent from './Style'
import AppHeader from '../../commonComponents/appheader/AppHeader'
import theme from '../../../data/theme.json'
import { Grid, Typography, makeStyles, TextField, Button } from '@material-ui/core'
// import SaveIcon from '@material-ui/icons/Save'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6


const useStyles = makeStyles(() => ({
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



    return (
        <ProjectFormStyledComponent theme={theme}>
            <AppHeader AppHeaderProps={{ activeTab: 'productivity' }} />
            <Grid container className={classes.mainContainer} >
                <Grid item container className={classes.titleContainer} alignItems='flex-end'  >
                    <Grid item xs={12} sm={6} > <Typography variant="h5"  > Add New Project</Typography> </Grid>
                    <Grid item xs={12} sm={6} > <Typography variant="caption"> LastdkjfhEdited: 3746286238</Typography> </Grid>
                </Grid>

                <Grid item container xs={12} sm={6} className={classes.column1} style={{ backgroundColor: '' }} >
                    <Grid item xs={12}> <TextField label="Project Name"  color="secondary" fullWidth /> </Grid>
                    <Grid item xs={12}> <TextField label="Description" multiline className={classes.TextField} color='secondary' fullWidth /> </Grid>
                    <Grid item xs={12}> <TextField label="Notes" multiline className={classes.TextField} color='secondary' fullWidth /> </Grid>
                    <Grid container item alignItems='flex-end'>
                        <Grid xs={4} item style={{ paddingRight: '10px' }}> <TextField label="Start Date" InputLabelProps={{ shrink: true }} defaultValue="2017-05-24" type='date' fullWidth className={classes.TextField} color='secondary' /> </Grid>
                        <Grid xs={8} item> <Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} >Sponsorship</Button> </Grid>
                    </Grid>
                    <Grid container item alignItems='flex-end'>
                        <Grid xs={4} item style={{ paddingRight: '10px' }}> <TextField label="Start Date" InputLabelProps={{ shrink: true }} type='date' defaultValue="2017-05-24" className={classes.TextField} color='secondary' fullWidth /> </Grid>
                        <Grid xs={4} item style={{ paddingRight: '10px' }}> <Button variant="outlined" color="secondary" size="large" fullWidth startIcon={<MonetizationOnIcon />} >Status</Button> </Grid>
                        <Grid xs={4} item style={{ paddingLeft: '10px' }}><Button variant="outlined" color="secondary" size="large" varient='filled' className={classes.TextField} fullWidth startIcon={<MonetizationOnIcon />} >SAVE</Button></Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={6} className={classes.column2} alignContent='flex-start' >
                    <Grid item container padding={2} alignItems='center' style={{marginBottom: '10px'}}>
                        <Grid item xs={4} > <Typography  >Script</Typography> </Grid>
                        <Grid item container xs={8} justify='flex-end' >
                           <Grid item > <Button variant="contained" color="secondary" size="small" fullWidth startIcon={<MonetizationOnIcon />} >Import</Button> </Grid>
                           <Grid item style={{marginLeft: '10px'}} > <Button variant="outlined" color="secondary" size="small" fullWidth startIcon={<MonetizationOnIcon />} >Export</Button> </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ height: '100%' }} > <ReactQuill style={{ height: '100%' }} /> </Grid>
                </Grid>



            </Grid>
        </ProjectFormStyledComponent>
    )
}

export default ProjectForm