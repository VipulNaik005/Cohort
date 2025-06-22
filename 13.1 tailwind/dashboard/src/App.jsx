import './App.css'
import { Main } from './components/Maincontent'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <div className='flex h-screen'>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

export default App
