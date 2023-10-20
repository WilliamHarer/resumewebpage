import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
export default function DefaultHeader() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static"  >
                <Toolbar sx={{justifyContent: 'flex-end', backgroundColor:'#39B5AB'}}>
                    <IconButton
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: '10px',
                        ml:'10px'}}
                    >
                        <EmailIcon fontSize={"large"} sx={{color:'#246170'}}/>
                    </IconButton>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: '10px',
                            ml:'10px'}}
                    >
                        <LinkedInIcon fontSize={"large"} sx={{color:'#246170'}} />
                    </IconButton>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: '10px',
                        ml:'10px'}}
                    >
                        <GitHubIcon fontSize={"large"} sx={{color:'#246170'}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
);
}