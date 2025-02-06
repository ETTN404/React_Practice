import styles from "./todoitem.module.css"
export default function TodoItem({item,todos,settodos}){
function deleteitem(item){
    console.log("delete item",item)
    settodos(todos.filter(todo=>todo!==item))
}var sss=0;
function done(item){
    settodos(
        todos.map(todo=>todo.name===item.name?{...todo,read:!todo.read}:{...todo,read:todo.read})
    );
}





    return <div className={styles.item}>
        <div className={styles.itemname}>
            <span className={item.read ===true?styles.readf:""} onClick={()=>done(item)}>
                {item.name}
            </span>
            <button onClick={()=>deleteitem(item)} className={styles.deletebutton}>
                x
            </button>
        </div>
        <hr className={styles.line}/>
        </div>
}