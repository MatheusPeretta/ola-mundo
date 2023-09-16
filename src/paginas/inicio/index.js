import PostCard from "componentes/PostCard";
import styles from './Inicio.module.css'
import posts from 'json/posts.json'

export default function Inicio() {
    return (
       
        <ul className={styles.posts}>
            {posts.map((posts)=>(
                <li key={posts.id}><PostCard post={posts}/></li>
            ))}

        </ul>
        
    );
}
