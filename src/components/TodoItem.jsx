import styles from "./todoitem.module.css"
export default function TodoItem({item,todos,settodos}){
function deleteitem(item){
    console.log("delete item",item)
    settodos(todos.filter(todo=>todo!==item))
}

    return <div className={styles.item}>
        <div className={styles.itemname}>{item}<span><button onClick={()=>deleteitem(item)} className={styles.deletebutton}>x</button></span></div>
        <hr className={styles.line}/>
        </div>
}