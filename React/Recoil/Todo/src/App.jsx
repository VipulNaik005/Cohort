import './App.css'
import { RecoilRoot,  useRecoilValue, useSetRecoilState } from 'recoil'
import { filterAtom } from './store/atoms/filter';
import { filteredTodos } from './store/selector/filteredTodos';

function App() {
  return (
    <RecoilRoot>
    <div>
      <Input />
      <Todo />
    </div>
    </RecoilRoot>
  )
}

function Input(){
  const changeFilter = useSetRecoilState(filterAtom);
  return(
    <input onChange={e=>{
      changeFilter(e.target.value);
    }} placeholder='Enter todo to search'></input>
  )
}

function Todo() {
  const todos = useRecoilValue(filteredTodos);

  return (
    <div>
      {todos.map((element, index) => (
        <div key={index}>
          <h4>{element.title}</h4>
          <p>{element.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App
