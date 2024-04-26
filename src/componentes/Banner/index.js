import styles from "../Banner/banner.module.css";
import minhaFoto from "assets/fotoperfil.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Ola, Sou a lay tenho 20 anos, aqui ira encontar diversar coisas como
          poemas, desenhos e indicaçoes de filmes e animes
        </p>
      </div>

      <div className={styles.imagens}>
       
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto de lay " />
      </div>
    </div>
  );
}
