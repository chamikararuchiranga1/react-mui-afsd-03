import AddStudent from "../../component/AddStudent/AddStudent.jsx";
import ViewStudent from "../../component/ViewStudent/ViewStudent.jsx";
import Box from "@mui/material/Box";
import {useState} from "react";
export default function Student() {

    const [student, setStudent] = useState([]);

    const add = (val) => {
        const data = [...student];
        data.push(val);
        setStudent(data)
    }

    const deleteStu = (index) => {
        const data = [...student];
        data.splice(index, 1);
        setStudent(data);
    }

    return(
        <Box>
            <h1>Student</h1>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <AddStudent studentData={(val)=> add(val)}/>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'between', marginY: 2, flexWrap: 'wrap'}}>
                {
                    student.map((val, index)=> (
                        <ViewStudent clickDelete={()=> deleteStu(index)} key={index} address={val.address} name={val.name} mobile={val.mobile} email={val.email}/>
                    ))
                }
            </Box>
        </Box>
    )
}
