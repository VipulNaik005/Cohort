import { useState } from 'react'

function App() {
  const [todos,setTodos] = useState([
    {id:1, title:"Buy milk",description:"random description", completed:false},
    {id:2, title:"Buy eggs",description:"random description", completed:false},
    {id:3, title:"Buy bread",description:"random description", completed:false},

  ]);
  function onBtnClick(){
    setTodos([...todos,{
      id:4,
      title:"Buy water",
      description:"random description",
    }])
  }

  return (
    <>
      <MyButton onClick={onBtnClick}/>
      {todos.map((todo)=><Todo title={todo.title} description={todo.description} />)}
    </>
  )
}
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
}
function MyButton(props){
  return <button onClick={props.onClick}>Create a random todo</button>
}

export default App
