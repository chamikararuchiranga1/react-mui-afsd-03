import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {useState} from "react";
import Card from "@mui/material/Card";
import {CardHeader} from "@mui/material";

export default function PostCard({id, title, description}) {

    return (
        <Card sx={{ maxWidth: 345 , margin: 2}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {id}
                    </Avatar>
                }
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
