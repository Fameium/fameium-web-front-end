import React from 'react'
import AppHeader from '../../commonComponents/appheader/AppHeader'

import { Grid, Typography, Paper } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import useStyles from './style.jsx'
const ProjectView = () => {

    const c = useStyles();

    return (<>
        <AppHeader activeTab='productivity' />
        <Grid container className={c.mainWrapper} variant="outlined">
            <Grid item container sm={12} alignItems='center' className={c.titleContainer}>
                <ArrowRightIcon /> <Typography variant='h6' className={c.mainTitle}>This is a project that is a smaple project</Typography>
                <Typography variant='caption' className={c.lastEdited}>LAST EDITED</Typography>
            </Grid>
            <Grid item container xs={12} sm={6} className={c.column1}>
                <Paper className={c.paper} elevation={2}>
                    <Typography varient='caption'>DESCRIPTION</Typography>
                    <Typography>jhdgfjsgdf sdjghdjf sjfhsdjfshdjfsghdjf sdjgfjf sdjfhbsdj fjhdbsdj fshbjf sdjfbhfj sdjfbh fj sdfhsdjfsdgfsdjf sdjfhsdjf sdjfhsdbjf sdjfhsdbjf sdjfh</Typography>
                </Paper>
                <Paper className={c.paper} elevation={2}>
                    <Typography varient='caption'>NOTES</Typography>
                    <Typography>jhdgfjsgdf sdjghdjf sjfhsdjfshdjfsghdjf sdjgfjf sdjfhbsdj fjhdbsdj fshbjf sdjfbhfj sdjfbh fj sdfhsdjfsdgfsdjf sdjfhsdjf sdjfhsdbjf sdjfhsdbjf sdjfh</Typography>
                </Paper>



                <Grid item container sm={12} className={c.paper}>
                    <Grid item container direction='column' xs={6}>
                        <Typography varient='caption'>Start Date</Typography>
                        <Typography varient='caption'>Jan 2 1099</Typography>
                    </Grid>
                    <Grid item container direction='column' className={c.endDate} xs={6} >

                        <Typography varient='caption'>Start Date</Typography>
                        <Typography varient='caption'>Jan 2 1099</Typography>
                    </Grid>

                </Grid>


            </Grid>
            <Grid item container xs={12} sm={6} className={c.column2}>
                <Paper className={`${c.paper} ${c.datePaper}`} elevation={2} >

                    <Grid item container sm={12}>
                        <Typography varient='caption'>DESCRIPTION</Typography>
                        <Typography varient='caption' className={c.endDate}>Dsdfjhfkdfjsd fjsdfhsdj fjs fhsjdfh sjdfbskdjfksd nfjdsh jsdhbfksjdbfs dkfh sdkfhbsdkf sdmf kshdf sdjhbfsd fksdhbfsn dfjkshbfkns dfjsd fjshd fjsdh fjsd fjdsh fksdf shd fsdhfsdhf sidfknsd fksdbfkas fksd fksadbfkds fkjsdbfkasd fksadbfknasdsdjfhksfsdfks</Typography>
                    </Grid>
                </Paper>


            </Grid>

        </Grid >
    </>
    )
}

export default ProjectView