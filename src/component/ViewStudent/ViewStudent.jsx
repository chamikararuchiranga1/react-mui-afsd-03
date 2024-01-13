import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ViewStudent({name, address, mobile, email, clickDelete}) {
    return(
        <Card sx={{ minWidth: 275, maxWidth: 300, padding: 2, margin: 1 }}>
            <Typography variant="h6" gutterBottom>
                Name : {name}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Address : {address}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Mobile : {mobile}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Email : {email}
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'end'}}>
                <IconButton onClick={()=> clickDelete()} aria-label="delete">
                    <DeleteIcon color={'error'}/>
                </IconButton>
            </Box>
        </Card>
    )
}
