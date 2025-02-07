import { useState } from "react"
import Form from "./Form";
import State from "./State";
import Footer from "./Footer";
export default function Todo(){
    const [todos,settodos]=useState([])
    const s=todos.filter(todo=>todo.read).length
    
    var sss=todos.slice().sort((a,b)=>Number(a.read)-Number(b.read));
    return (
        <div className="header">
            <Form todos={todos} settodos={settodos}/>
            <State todos={sss} settodos={settodos}/>
            <Footer done={s} total={todos.length}/>
        </div>
            
    )
}
