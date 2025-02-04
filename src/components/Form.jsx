import styles from "./form.module.css"
import { useState } from "react";
export default function Form({todos,settodos}){
    
    const [todo,settodo]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        settodos([...todos,todo]);
        settodo("");
    }
    return <form className={styles.todoform} onSubmit={handleSubmit}>
    <div style={{display:"flex"}}>
    <input placeholder="Enter todo item...." className={styles.moderinput} onChange={(e)=>settodo(e.target.value)} value={todo} type="text"  />
    <button className={styles.modernbutton}>Add</button>
</div>
    </form>
}