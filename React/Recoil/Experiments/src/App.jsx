import { RecoilRoot,  useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom, evenSelector } from '../store/atoms/count'

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count /> 
      </RecoilRoot>

    </div>
  )
}
function Count() {
  return <div>
    <CountRendrer />
    <Buttons />
    <Even />
  </div>
}
function CountRendrer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function Even(){
  const isEven =  useRecoilValue(evenSelector);
  return <div>
    {isEven && <p>It is Even</p>}
  </div>
}


export default App
