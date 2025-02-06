import styles from "./footer.module.css"
export default function Footer({done,total})
{
    return(
        <div className={styles.footerdiv}>
            <span style={{padding:"100px"}}>
            completed : {done} 
            </span>total : {total}
        </div>
     )
}
