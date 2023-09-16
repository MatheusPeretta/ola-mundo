import Post from "componentes/Post";
import styles from './Inicio.module.css'
import posts from 'json/posts.json'

export default function Inicio(post) {
    return (
       
        <ul className={styles.posts}>
            {posts.map((posts)=>(
                <li key={posts.id}><Post post={posts}/></li>
            ))}

        </ul>
        
    );
}
