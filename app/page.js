"use client";
import { useState } from "react"

export default function Home() {
  //const [showPopup, setShowPopup] = React.useState(false);
  return (
    <main>
      <header className="flex justify-between items-center mb-4" style={{ fontSize: '36px' }}>
        <h1 className = "text-slate-300">todo</h1>
        <button className="text-slate-300">new task</button>
      </header>
    </main>
  )
}
