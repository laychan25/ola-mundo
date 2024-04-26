import { Link } from 'react-router-dom'
import styles from './post.module.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'

export default function PostCard({post}){
    return (
        <Link to={`/Posts/${post.id}`}>
        <div className={styles.post}>
            <img className={styles.capa}
            src={`/assets/post/${post.id}/capa.jpg`}
            alt='capa do post'
            />

            <h2 className={styles.titulo}> {post.titulo}</h2>

            <BotaoPrincipal> Ler</BotaoPrincipal>

        </div>
        </Link>

    )
}