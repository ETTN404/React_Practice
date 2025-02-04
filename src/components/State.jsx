import TodoItem from "./TodoItem";
export default function State({todos}){
    var styles={
        backgroundColor:"white",
        borderRadius:"8px",
        boxShadow:"0 4px 6px rgba(0,0,0,0.1)",
        width:"500px",
        margin:"0 auto",
        padding:"20px",
        marginTop:"50px"
    }
    return <div style={styles}>
        
        {todos.map((item,index)=>(<TodoItem key={index} item={item}/>))}
        
    </div>
}