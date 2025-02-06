import { useState } from "react"
import Form from "./Form";
import State from "./State";
export default function Todo(){
    const [todos,settodos]=useState([])
    
    return (
        <div className="header">
            <Form todos={todos} settodos={settodos}/>
            <State todos={todos} settodos={settodos}/></div>
    )
}