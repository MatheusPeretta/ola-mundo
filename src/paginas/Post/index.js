import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css'
import styles from './Post.module.css'
import NaoEncontrada from "paginas/NaoEncontrada";
import PagPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post(){
    const parametros = useParams()
    
    const post = posts.find((post)=>{
        return post.id===Number(parametros.id)
    })
    
    if(!post){
        return <NaoEncontrada/>
    }

    const postRecomendado = posts
        .filter((posts)=>posts.id !== Number(parametros.id))
        .sort((a,b)=>b.id-a.id)
        .slice(0,4);
        console.log(postRecomendado)

    return(
        <Routes>
            <Route path="*" element={<PagPadrao/>}>
                <Route index element={
                        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                            <div className="post-markdown-container">
                                <ReactMarkdown>
                                    {post.texto}
                                </ReactMarkdown>
                
                            </div>
                            <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                            <ul className={styles.postsRecomendados}>
                                {postRecomendado.map((post)=>(
                                    <li key={post.id}>
                                        <PostCard post={post}/>
                                    </li>
                                ))}
                            </ul>
                        </PostModelo>
                }/>

            </Route>
            
        </Routes>
        

    )
}
