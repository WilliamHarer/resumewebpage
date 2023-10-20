import Paper from '@mui/material/Paper';
import React, {ReactElement} from "react";

//type ButtonProps = {
//   children: ReactNode;
//   icon: ReactElement<IconProps>;
// };
interface InfoPaperProps {
    text?: string;
    children?: ReactElement;
}
export default function InfoPaper( props:InfoPaperProps ) {
    return (
        <Paper style={{ borderRadius: 15,
            display: 'flex',
            height: '95%',
            marginTop: '20px',
            marginLeft: '20px',
            marginRight: '20px',
            marginBottom: '20px',
            backgroundColor: '#E9EAE4',
            overflowY: 'auto'}}>
            {props.children}
        </Paper>
    )
}