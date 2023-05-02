import { DashboardEntries, DashboardEntry, useDashboardEntries } from '../../dashboard.module/api/api';
import { ApolloQueryComponent } from '../../lib/ApolloQueryComponent';
import { Stack, Avatar, Box, Typography, useMediaQuery,useTheme } from '@mui/material';
import { FunctionComponent, useState } from "react"
import { purple,amber } from '@mui/material/colors';
import { match } from '../../lib/util';

const purple1 = '#37306B'
const purple2= '#66347F'
const purple3= '#9E4784'
const purple4 = '#D27685'
const purple5 = '#FFB84C'
const purple6 = '#F5EAEA'
const useMatchMediaQuery = ({xs,sm,md,lg,xl}: {xs?: any,sm?: any,md?:any,lg?:any,xl?:any})=>{
    const theme = useTheme()
    const greaterXs = useMediaQuery(theme.breakpoints.up('xs'))
    const greaterSm = useMediaQuery(theme.breakpoints.up('sm'))
    const greaterMd = useMediaQuery(theme.breakpoints.up('md'))
    const greaterLg = useMediaQuery(theme.breakpoints.up('lg'))
    const greaterXl = useMediaQuery(theme.breakpoints.up('xl'))
    return match([
        [greaterXl && xl,xl],
        [greaterLg && lg,lg],
        [greaterMd && md,md],
        [greaterSm && sm,sm],
        [greaterXs && xs,xs]
    ])
}

export const Dashboard = () => {
    const queryResult = useDashboardEntries()
    const cols = useMatchMediaQuery({
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
    })
    console.log(cols)
    

    return <ApolloQueryComponent<DashboardEntries> result={queryResult} >
        {({ dashboardEntry }) => <Box sx={{minHeight: '100%', backgroundColor: purple1,p:3,color: purple6}}>
            <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`,gap: 4}}>
                {dashboardEntry.map(entry => <DashboardEntryCard key={entry.id} {...entry} />)}
            </Box>
        </Box>}
    </ApolloQueryComponent>
}



export const DashboardEntryCard: FunctionComponent<DashboardEntry> = ({ id, url, title, description, icon: { external, location } }) => {
    const imgSrc = external ? location : url + location
    const borderRadius= 10
    return <Stack direction="row" component="article" sx={{backgroundColor: purple2,px: 2,py:1}}>
        <Stack justifyContent="center" component="span" sx={{p:1,mr:2,backgroundColor: purple5, borderRadius: `${borderRadius}px ${borderRadius}px ${borderRadius}px ${borderRadius}px / ${borderRadius}px ${borderRadius}px ${borderRadius}px ${borderRadius}px`}}>
            <Avatar variant="square" sx={{width:64,height:64}} alt={`favicon for ${title}`} src={imgSrc} />
        </Stack>
        <Box>
            <Typography variant="h6" component="h1">{title}</Typography>
            <Typography variant="subtitle1" component="h2">{description}</Typography>
        </Box>
    </Stack>
}