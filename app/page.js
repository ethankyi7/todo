"use client";
import { useState } from "react";
import Link from 'next/link'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow p-6" style={{ height: "400px", width: "400px", marginLeft: "250px" }}>
        <h1 className = {`flex justify-center items-center text-3xl`}>Sign In</h1>
        <TextField fullWidth id="outlined-basic" label="username" variant="outlined" margin = "normal" style={{ marginTop: "50px" }}/>
        <TextField fullWidth id="outlined-basic" label="password" variant="outlined" margin = "normal" style={{ marginTop: "20px" }}/>
        <div className="flex justify-between mt-auto mb-3 scale-250" style={{marginTop: "50px"}}>
          <Button variant="outlined" size="large">
            <Link href="/signup">sign up</Link>
          </Button>
          <Button variant="outlined" size="large">log in</Button>
        </div>
      </div>
    </div>
  );
}


