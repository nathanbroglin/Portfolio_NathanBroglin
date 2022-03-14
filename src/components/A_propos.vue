<template>
  <main >
    <section class="sec5_1">
      <img class="image5_1" src="../../static/img/backapropos.png" alt="#">
      <div class="me">
        <img src="../../static/img/me.png" alt="#">
      </div>
      <div class="text_me">
        <h2>NATHAN BROGLIN</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="608" height="77" viewBox="0 0 608 77">
          <line id="Ligne_29" data-name="Ligne 29" x2="608" transform="translate(0 24)" fill="none" stroke="#252525" stroke-width="5"/>
          <text id="_ネイサン_ブログリン" data-name="
ネイサン・ブログリン" fill="#252525" font-size="30" font-family="Red Rose" font-weight="700"><tspan x="0" y="28"></tspan><tspan font-family="YuGothicUI-Bold, Yu Gothic UI"><tspan x="0" y="69">ネイサン・ブログリン</tspan></tspan></text>
        </svg>
        <p>Je suis actuellement étudiant en deuxième année de Métiers du Multimédia et de l'Internet  à l'IUT de Belfort-Montbéliard</p>
        <a href="#">Contactez moi</a>
      </div>
    </section>
    <section class="sec5_2">
      <svg xmlns="http://www.w3.org/2000/svg" width="1297" height="5" viewBox="0 0 1297 5">
        <line id="Ligne_30" data-name="Ligne 30" x2="1297" transform="translate(0 2.5)" fill="none" stroke="#252525" stroke-width="5"/>
      </svg>
      <h3>MES RESEAUX</h3>
      <img src="../../static/img/réseaux.png" alt="#">
      <h3>Pour me contacter</h3>
      <p>Veuillez m'écrire sur mon mail nathan.broglin@gmail.com ou directement via le formulaire si dessous</p>
      <form class="form">
        <div>
          <input type="text" id="name" name="user_name" value="Nom" onfocus="this.value=''">
        </div>
        <div>
          <input type="text" id="firstname" name="user_name" value="Prénom" onfocus="this.value=''">
        </div>
        <div>
          <input type="text" id="mail" name="user_name" value="Mail" onfocus="this.value=''">
        </div>
        <div>
          <input type="text" id="message" name="user_name" value="Message" onfocus="this.value=''">
        </div>
        <button class="add">
          Envoyer
        </button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'A_propos',
  data () {
    return {

    }
  },
}
</script>
