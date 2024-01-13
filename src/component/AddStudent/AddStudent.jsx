import Card from "@mui/material/Card";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useState} from "react";

export default function AddStudent({studentData}) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const saveStudent = () => {
        if (name !== '' && address !== '' && mobile !== '' && email !== '' ){
            studentData({
                name: name,
                address: address,
                mobile: mobile,
                email: email,
            })
            clean();
        }else {
            alert('input your details..!')
        }
    }

    const clean = ()=> {
        setEmail('');
        setName('');
        setAddress('');
        setMobile('');
    }

    return(
        <Card sx={{ minWidth: 275, maxWidth: 350, padding: 2 }}>
            <h2>Add Student</h2>
            <TextField
                onChange={(val)=> setName(val.target.value)}
                value={name}
                fullWidth
                sx={{marginY: 1}}
                id="outlined-basic"
                label="Name"
                variant="outlined"
            />
            <TextField
                onChange={(val)=> setAddress(val.target.value)}
                value={address}
                fullWidth
                sx={{marginY: 1}}
                id="outlined-basic"
                label="Address"
                variant="outlined"
            />
            <TextField
                onChange={(val)=> setMobile(val.target.value)}
                value={mobile}
                fullWidth
                sx={{marginY: 1}}
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
            />
            <TextField
                onChange={(val)=> setEmail(val.target.value)}
                value={email}
                fullWidth
                sx={{marginY: 1}}
                id="outlined-basic"
                label="Email"
                variant="outlined"
            />
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button onClick={()=> saveStudent()} variant="contained">Save</Button>
            </Box>
        </Card>
    )
}
