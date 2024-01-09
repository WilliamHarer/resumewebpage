import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {IconButton, TextField, TextareaAutosize} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: '#868180',
    borderRadius:'10px',
    p: 4,
    height:'40%',

};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: '10px',
                ml:'10px'}}>
                <EmailIcon fontSize={"large"} onClick={handleOpen} sx={{color:'#7D5067'}}/>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="outlined-basic" label="Please Enter Your Email Address Here" variant="outlined" style={{backgroundColor:'#E9EAE4',marginTop:'20px', borderRadius:'4px', width:'100%'}}/>
                    <TextareaAutosize   minRows={8} maxRows={8} placeholder="Enter Email Content Here" style={{backgroundColor:'#E9EAE4',marginTop:'20px', borderRadius:'4px',width:'100%'}}/>
                </Box>
            </Modal>
        </div>
    );
}