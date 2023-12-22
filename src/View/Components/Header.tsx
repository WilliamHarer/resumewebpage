'use client'

import {AppBar, Box, IconButton, Toolbar,} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import React from "react";
import EmailModal from "./Modals/EmailModal";



export default function DefaultHeader() {
    return (
        <Box sx={{ flexGrow: 1}}>
                <AppBar position="static"  >
                    <Toolbar sx={{justifyContent: 'flex-end', backgroundColor:'#323922'}}>
                        <EmailModal/>
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: '10px',
                                ml:'10px'}}
                        >
                            <LinkedInIcon fontSize={"large"} sx={{color:'#88A0C2'}} />
                        </IconButton>
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: '10px',
                            ml:'10px'}}
                        >
                            <GitHubIcon fontSize={"large"} sx={{color:'#88A0C2'}}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
        </Box>
);
}