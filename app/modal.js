import TextField from '@mui/material/TextField';
import React from 'react';

export default function modal({open, onClose, children}) {
    return(
        <div onClick = {onClose} className = {`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visibile bg-black/20" : "invisible"}`}>
            <div className = {`bg-white rounded-1g shadow p-6 transition-all ${open ? "scale-1000 opacity-100" : "scale-125 opacity-0"}`} style={{ width: '700px', height: '600px' }}>
                {children}
                <h1 className = {`flex justify-center items-center text-3xl`}>add a new task</h1>
                <TextField fullWidth id="outlined-basic" label="Task Name" variant="outlined" margin = "normal"/>
                <TextField fullWidth id="outlined-basic" label="description" variant="outlined" multiline rows = {4}/> 
            </div>
        </div>
    )
}