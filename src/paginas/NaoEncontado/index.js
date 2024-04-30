import BotaoPrincipal from "componentes/BotaoPrincipal"
import styles from "../NaoEncontado/naoEncontradaa.module.css"
import erro404 from  "assets/erro404.jpg"
import { useNavigate } from "react-router-dom"

export default function NaoEncontado(){

    const navegar = useNavigate()
    return(
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops pagina nao encontrada</h1>

           <p className={styles.paragrafo}>
            Tem certeza que era isso que estava procurando ?

           </p>
           <p className={styles.paragrafo}>  Aguarde uns instantes e recaregue a pagina, ou volte para a pagina inicial</p>

           <div
             onClick={()=> navegar(-1)}
            className={styles.botaoContainer}>
            <BotaoPrincipal tamanho='lg'>
                Voltar
                </BotaoPrincipal>
           </div>
           <img 
             className={styles.imagemCachorro}
             src={erro404}
             alt=' foto da gatinha misty filhote'
             />
        </div>
        <div className={styles.espacoEmBranco}>

        </div>
        </>
    )
}