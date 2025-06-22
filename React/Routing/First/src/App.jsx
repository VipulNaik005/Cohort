import { lazy, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Landing } from './components/Landing'
const Dashboard = lazy(()=> import('./components/Dashboard'))

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
function Topbar(){
  const navigate = useNavigate();
  return (
    <div>
      <h1>Top bar</h1>
      <button onClick={()=>{
        navigate("/dashboard")
      }}>Dashboard</button>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button>
    </div>
  )
}

export default App
