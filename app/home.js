"use client";
import { useState } from "react";
import Modal from "/app/Modal.js";
import Button from "@mui/material/Button";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="flex justify-between items-center mb-4 text-3xl w-full">
        <h1 className = "text-slate-300 m1-auto">todo</h1>
        <Button variant="outlined" className="text-slate-300 m1-auto" onClick={() => setOpen(true)}>new task</Button>
      </header>
      <Modal open = {open} onClose = {() => setOpen(false)}/>
    </main>
  )
}
