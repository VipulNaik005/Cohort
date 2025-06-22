import {selector} from "recoil";
import todosAtom from "../atoms/todo";
import { filterAtom } from "../atoms/filter";
export const filteredTodos = selector({
    key:"filteredTodos",
    get : ({get})=>{
        const todos = get(todosAtom);
        const Filter = get(filterAtom);
        return todos.filter(todo => todo.title.includes(Filter) || todo.description.includes(Filter));
    }
})