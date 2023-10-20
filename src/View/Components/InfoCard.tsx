import Paper from '@mui/material/Paper';
import React, {ReactElement} from "react";

//type ButtonProps = {
//   children: ReactNode;
//   icon: ReactElement<IconProps>;
// };
interface InfoCardProps {
    text?: string;
    children?: ReactElement;
    height?: string;
    backgroundColor?: string;
}
export default function InfoCard( props:InfoCardProps ) {
    return (
        <Paper style={{ borderRadius: 15,
        display: 'flex',
        height: props.height,
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '20px',
        backgroundColor: props.backgroundColor? props.backgroundColor:'#E9EAE4',
        overflowY: 'auto',
        boxShadow: "      inset 0 1px 1px hsl(0deg 0% 0% / 0.075),\n" +
            "      inset 0 2px 2px hsl(0deg 0% 0% / 0.075),\n" +
            "      inset 0 4px 4px hsl(0deg 0% 0% / 0.075),\n" +
            "      inset 0 8px 8px hsl(0deg 0% 0% / 0.075),\n" +
            "      inset 0 16px 16px hsl(0deg 0% 0% / 0.075)"}}>
    {props.children}
    </Paper>
)
}