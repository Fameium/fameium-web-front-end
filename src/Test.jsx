import React from 'react'
import { Grid, TextField } from '@material-ui/core'
const Test = () => {

    return (
        <Grid container style={{ padding: '20px', backgroundColor: 'red' }} >
            <Grid item sm={6} style={{ paddingRight: '20px', backgroundColor: 'blue' }}>
                <div style={{ height: '50px', width: '50px', backgroundColor: 'black' }}></div>
            </Grid>
            <Grid item sm={6} style={{ paddingLeft: '20px', backgroundColor: 'blue' }}>
                <div style={{ height: '50px', width: '50px', backgroundColor: 'black' }}></div>
            </Grid>
            <Grid item container sm={6} style={{ padding: '10px', backgroundColor: 'yellow' }} >
                <Grid item sm={6}> <div style={{ height: '50px', width: '100%', backgroundColor: 'black' }}></div></Grid>
                <Grid item sm={6}>  <div style={{ height: '50px', width: '100%', backgroundColor: 'green' }}></div></Grid>
                <Grid item container sm={12} style={{ backgroundColor: 'white' }}>
                    <Grid item sm={4} ><div style={{ height: '50px', width: '100%', backgroundColor: 'purple' }}></div></Grid>
                    <Grid item sm={8} ><div style={{ height: '50px', width: '100%', backgroundColor: 'violet' }}></div></Grid>
                </Grid>
                <Grid item container sm={12} style={{ backgroundColor: 'red' }}>
                    <TextField label="Project Name" variant='outlined' color="secondary" />

                </Grid>
            </Grid>

        </Grid>
    )
}

export default Test