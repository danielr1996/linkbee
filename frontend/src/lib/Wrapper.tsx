import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

export const Wrapper = ()=>{
    return <Box sx={{height: '100vh', overflow: 'scroll'}}>
        <Outlet />
    </Box>
}