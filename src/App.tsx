import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div style={{ padding: 16, width: 300 }}>
      <h2>Clasp</h2>

      <input
        type="text"
        placeholder="Add a todo…"
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 8,
        }}
      />

      <button style={{ width: "100%", padding: 8 }}>
        Add
      </button>
    </div>
  );
}
