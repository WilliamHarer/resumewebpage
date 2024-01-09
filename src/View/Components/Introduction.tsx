import Avatar from '../../../public/Assets/Avatar.jpg'
import Image from 'next/image'
import Typography from "@mui/material/Typography";

export default function Introduction(){
    return (
        <div>
            <Image src={Avatar} alt={'Headshot of William Harer'} style={{width:'250px', height:'250px',borderRadius:'140px',margin:"auto"}}/>
            <Typography align="center" variant="h6">SWE/SDET/DEVOPS</Typography>
            <Typography align="center" style={{margin:'auto'}}>Mid level Career Software Engineer, always on the look out for new and interesting tech to study.</Typography>
        </div>
    )
}