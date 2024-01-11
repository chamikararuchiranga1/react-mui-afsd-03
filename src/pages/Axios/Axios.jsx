import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import PostCard from "../../component/PostCard/PostCard.jsx";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {TextField} from "@mui/material";
import instance from "../../services/AxiosOrder.jsx";
export default function Axios() {

    const [data, setData] = useState([]);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        instance.get('/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setData(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setData(response.data)
            })
    }

    const postData = () => {
        console.log(id, title, body)
        instance.post('/posts', {
            title: title,
            body: body,
            userId: id,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div>
            <h1>Axios</h1>
            <br/>
            <Box sx={{marginY: 3}}>
                <Card sx={{ maxWidth: 345 , margin: 2, padding:1}}>
                    <h2>Add Post</h2>
                    <TextField
                        sx={{marginY:1}}
                        fullWidth
                        id="outlined-basic"
                        label="Id"
                        variant="outlined"
                        onChange={(val)=> {setId(val.target.value)}}
                    />
                    <TextField
                        sx={{marginY:1}}
                        fullWidth
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        onChange={(val)=> {setTitle(val.target.value)}}
                    />
                    <TextField
                        sx={{marginY:1}}
                        fullWidth
                        id="outlined-basic"
                        label="Body"
                        variant="outlined"
                        onChange={(val)=> {setBody(val.target.value)}}
                    />
                    <Button variant="contained" onClick={()=> postData()}>Axios Post</Button>
                </Card>
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {data.map((val)=> (
                    <PostCard key={val.id} title={val.title}  description={val.body} id={val.id}/>
                ))}
            </Box>
        </div>

    )
}
