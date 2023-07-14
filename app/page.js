"use client";
import { useState } from "react"
import Modal from "/app/Modal.js"

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="flex justify-between items-center mb-4 text-3xl w-full">
        <h1 className = "text-slate-300 m1-auto">todo</h1>
        <button className="text-slate-300 m1-auto" onClick={() => setOpen(true)}>new task</button>
      </header>
      <Modal open = {open} onClose = {() => setOpen(false)}/>
    </main>
  )
}
