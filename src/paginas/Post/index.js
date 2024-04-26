import styles from './post.module.css'
import "./post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontado from "paginas/NaoEncontado";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from 'componentes/PostCard';

export default function Post() {
  const parametro = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametro.id);
  });

  if (!post) {
    return <NaoEncontado />;
  }

  const postRecomendados = posts.filter((post)=> post.id !== Number(parametro.id))
   .sort((a,b)=> b.id - a.id)
   .slice(0,4)

   

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
         index
          element={
            <PostModelo
              fotoCapa={`/assets/post/${post.id}/capa.jpg`}
              titulo={post.titulo}
            >
               <div className="post-markdown-container">
                  <ReactMarkdown>
                     {post.texto}
                  </ReactMarkdown>
                 </div>

              <h2 className={styles.tituloOutrosPosts}>Outros post que voce pode gostar:</h2>

              <ul className={styles.PostsRecomendados}>
                {postRecomendados.map((post)=>(
                  <li key={post.id}>
                    <PostCard post={post} />

                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
