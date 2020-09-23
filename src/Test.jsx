import React from 'react'
import { Grid } from '@material-ui/core'
const Test = () => {

    return (
        <Grid container style={{backgroundColor: 'yellowgreen'}} spacing={2} >
            <Grid item sm={6} xs={12}>
                <div style={{ height: '50px', width: '100%', backgroundColor: 'black' }}></div>
            </Grid>
            <Grid item sm={6} xs={12} >
                <div style={{ height: '50px', width: '100%', backgroundColor: 'grey' }}></div>
            </Grid>

            <Grid item container sm={6} xs={12} style={{ backgroundColor: 'orange' }} >
                <div style={{ height: '50px', width: '100%', backgroundColor: 'black' }}></div>
                <div style={{ height: '50px', width: '100%', backgroundColor: 'green' }}></div>
                <Grid item container style={{ backgroundColor: 'red' }} >
                    <Grid item xs={4} ><div style={{ height: '50px', width: '100%', backgroundColor: 'purple' }}></div></Grid>
                    <Grid item xs={8} ><div style={{ height: '50px', width: '100%', backgroundColor: 'violet' }}></div></Grid>
                </Grid>
                <Grid item container style={{ backgroundColor: 'red' }}>
                    <Grid item xs={4} ><div style={{ height: '50px', width: '100%', backgroundColor: 'violet' }}></div></Grid>
                    <Grid item xs={4} ><div style={{ height: '50px', width: '100%', backgroundColor: 'purple' }}></div></Grid>
                    <Grid item xs={4} ><div style={{ height: '50px', width: '100%', backgroundColor: 'yellow' }}></div></Grid>
                </Grid>
            </Grid>

            <Grid item container sm={6} xs={12} style={{ backgroundColor: 'red' }} justify='flex-start' alignItems='flex-start' alignContent='flex-start'  >
                <Grid item xs={12} sm={6}> <div style={{ height: '50px', width: '100%', backgroundColor: 'green' }}></div></Grid>
                <Grid item xs={12} sm={6}>  <div style={{ height: '50px', width: '100%', backgroundColor: 'black' }}></div></Grid>

                <Grid item xs={12} ><div style={{ height: '50px', width: '100%', backgroundColor: 'purple' }}></div></Grid>

            </Grid>

        </Grid>
    )
}

export default Test