import styles from "./form.module.css"
import { useState } from "react";
export default function Form({todos,settodos}){

    const [todo,settodo]=useState({name:"",read:false});
    function handleSubmit(e){
        e.preventDefault();
        settodos([...todos,todo]);
        settodo({name:"",read:false});
    }
    
    return <form className={styles.todoform} onSubmit={handleSubmit}>
    <div style={{display:"flex"}}>
    <input placeholder="Enter todo item...." className={styles.moderinput} onChange={(e)=>settodo({...todo,name:e.target.value})} value={todo.name} type="text"  />
    <button className={styles.modernbutton}>Add</button>
</div>
    </form>
}