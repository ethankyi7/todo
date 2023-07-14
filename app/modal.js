import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import React from 'react';

const marks = [
    {
        value: 1,
        label: "irrelevanat",
    },
    {
        value: 2,
        label:  " ",
    },
    {
        value: 3,
        label:  " ",
    },
    {
        value: 4,
        label:  " ",
    },
    {
        value: 5,
        label:  "relevant",
    },
    {
        value: 6,
        label:  " ",
    },
    {
        value: 7,
        label:  " ",
    },
    {
        value: 8,
        label:  " ",
    },
    {
        value: 9,
        label:  " ",
    },
    {
        value: 10,
        label:  "urgent",
    },
]

export default function modal({open, onClose, children}) {
    return(
        <div className = {`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visibile bg-black/20" : "invisible"}`}>
            <div className = {`bg-white rounded-1g shadow p-6 transition-all ${open ? "scale-1000 opacity-100" : "scale-125 opacity-0"}`} style={{ width: '600px', height: '500px' }}>
                {children}
                <h1 className = {`flex justify-center items-center text-3xl`}>add a new task</h1>
                <TextField fullWidth id="outlined-basic" label="Task Name" variant="outlined" margin = "normal"/>
                <TextField fullWidth id="outlined-basic" label="description" variant="outlined" multiline rows = {4} style= {{marginTop: "10px"}}/> 
                <div style={{ width: '450px', margin: '0 auto', marginTop: "50px"}}>
                    <Slider step={1} marks={marks} min={1} max={10} valueLabelDisplay="auto" />
                </div>
                <div className="flex justify-between mt-auto mb-3 scale-250" style={{marginTop: "50px"}}>
                    <Button variant="outlined" onClick={onClose} size="large">Cancel</Button>
                    <Button variant="outlined" size="large">Confirm</Button>
                </div>
            </div>
        </div>
    )
}