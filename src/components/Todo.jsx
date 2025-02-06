import { useState } from "react"
import Form from "./Form";
import State from "./State";
import Footer from "./Footer";
export default function Todo(){
    const [todos,settodos]=useState([])
    const s=todos.filter(todo=>todo.read).length
    return (
        <div className="header">
            <Form todos={todos} settodos={settodos}/>
            <State todos={todos} settodos={settodos}/>
            <Footer done={s} total={todos.length}/>
        </div>
            
    )
}
