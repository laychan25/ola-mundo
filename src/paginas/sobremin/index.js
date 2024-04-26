import style from "./sobremim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/transferir.jpg";
import fotoSobremim from "assets/sobremim_fotocapa.webp";

export default function Sobremim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={style.subtitulo}>
        Ola, eu sou a Laurie mas pode me chamar de Lay
      </h3>

      <img
        src={fotoSobremim}
        alt="Foto de lay sorrindo "
        className={style.fotoSobreMim}
      />

      <p className={style.paragrafo}>
        Sempre achei difícil escrever um “sobre mim”, o que exatamente devo
        falar sobre? Bom lá vai
      </p>
      <p className={style.paragrafo}>
        Eu morro desde sempre em uma cidadezinha de mais ou menos 17 mil
        habitantes no interior de São Paulo, a vida aqui e tranquila e simples,
        mas sempre me senti meio deslocada seja na escola ou em relação ao
        futuro...
      </p>

      <p className={style.paragrafo}>
        Sempre tive poucos amigos, não e tão fácil encontrar pessoas com os
        mesmos interesses por aqui, quando estava no 7 ano da escola encontrei
        os animes e posso disser que me “salvaram”, eu finalmente senti que
        havia algo que eu gostava e podia fazer parte. Atualmente não assisto
        mais tantos, mas ainda são importantes para mim.
      </p>

      <p className={style.paragrafo}>
        Em 2021 resolvi estudar programação, a princípio a motivação veio vendo
        vídeos de um youtuber que gosto muito ‘’Gemaplys’’ ele fazia alguns
        vídeos fazendo jogos do zero e isso me encantava, criar algo do
        absolutamente nada me parecia incrível. E foi assim que comecei a
        estudar na Alura, estou no momento estudando Front end., estou
        aprendendo Javascript, html, css e React que é justamente o porquê estou
        fazendo esse site kkkk faz parte da aula, mas também achei legal a ideia
        de um “blog”.
      </p>
      <p className={style.paragrafo}>
        Realmente amei me descobrir no mundo da programação, eu acho muito
        interessante e tenho vontade de aprender cada dia mais, obviamente nem
        tudo são flores, meus pais não me apoiam acham que isso não vai dar em
        nada, isso me desanima, bom as vezes até eu mesma não acredito em mim.
      </p>
      <p className={style.paragrafo}>
        Saindo da parte bad vibes, e falando sobre meus gosto e interesses.
      </p>
      <p className={style.paragrafo}>
        Eu sou do signo de Escorpião, sim eu gosto de signo, eu desenho e
        planejo mais para a frente comprar uma mesa digitalizadora para poder
        pintar e fazer desenhos. Minhas serie favoritas são: Breaking bad,
        Orange is the new black e Anne with an E
      </p>
      <p className={style.paragrafo}>
        Adoro ler romances, fantasias e poemas, me considero uma pessoa
        melodramática, meu gênero musical favorito e metal, ouço desde rock clássico até death metal  

      </p>
    </PostModelo>
  );
}
