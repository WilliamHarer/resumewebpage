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
            overflowY: 'auto',
            boxShadow: "       0 1px 1px hsl(0deg 0% 0% / 0.075),\n" +
                "       0 2px 2px hsl(0deg 0% 0% / 0.075),\n" +
                "       0 4px 4px hsl(0deg 0% 0% / 0.075),\n" +
                "       0 8px 8px hsl(0deg 0% 0% / 0.075),\n" +
                "       0 16px 16px hsl(0deg 0% 0% / 0.075)"}}>
            {props.children}
        </Paper>
    )
}