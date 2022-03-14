<template>
  <main class="main_projets">
    <svg class="jap" xmlns="http://www.w3.org/2000/svg" width="1143.5" height="77" viewBox="0 0 1143.5 77">
      <g id="Groupe_19" data-name="Groupe 19" transform="translate(1289 -21) rotate(90)">
        <line id="Ligne_1" data-name="Ligne 1" y2="417" transform="translate(75.5 145.5)" fill="none" stroke="#fff" stroke-width="4"/>
        <text id="_プロジェクト" data-name="
プロジェクト" transform="translate(21 775) rotate(-90)" fill="#fff" font-size="30" font-family="Red Rose" font-weight="700"><tspan x="0" y="28"></tspan><tspan font-family="YuGothicUI-Bold, Yu Gothic UI"><tspan x="0" y="69">プロジェクト</tspan></tspan></text>
        <line id="Ligne_33" data-name="Ligne 33" y2="417" transform="translate(75.5 872)" fill="none" stroke="#fff" stroke-width="4"/>
      </g>
    </svg>
    <div class="slider">
      <div class="slides">
        <div class="slide">
          <img src="../../static/img/projet1.png" alt="#">
          <h2 class="title-projet">BUG DAYS</h2>
          <router-link to="/projet1">En apprendre plus</router-link>
        </div>
        <div class="slide">
          <img src="../../static/img/projet2.png" alt="#">
          <h2 class="title-projet">CASA MILA</h2>
          <router-link to="/projet2">En apprendre plus</router-link>
        </div>
        <div class="slide">
          <img src="../../static/img/projet3.png" alt="#">
          <h2 class="title-projet">TOUCANO LUDIO</h2>
          <router-link to="/projet3">En apprendre plus</router-link>
        </div>
        <div class="slide">
          <img src="../../static/img/projet4.png" alt="#">
          <h2 class="title-projet">LA RONDE DU BOSMONT</h2>
          <router-link to="/projet4">En apprendre plus</router-link>
        </div>
      </div>
      <div class="flèches">
        <svg class="precedent" xmlns="http://www.w3.org/2000/svg" width="23.488" height="30.392" viewBox="0 0 23.488 30.392">
          <g id="flèche_scroll" data-name="flèche scroll" transform="translate(-1619.666 -766.567)">
            <line id="Ligne_5" data-name="Ligne 5" y1="12" x2="19" transform="matrix(-1, -0.017, 0.017, -1, 1640.791, 781.002)" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-width="3"/>
            <line id="Ligne_6" data-name="Ligne 6" x2="19" y2="13.5" transform="matrix(-1, -0.017, 0.017, -1, 1640.791, 794.832)" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-width="3"/>
          </g>
        </svg>
        <svg class="suivant" xmlns="http://www.w3.org/2000/svg" width="24.94" height="31.147" viewBox="0 0 24.94 31.147">
          <g id="flèche_scroll" data-name="flèche scroll" transform="matrix(-0.998, 0.07, -0.07, -0.998, 1694.437, 681.632)">
            <line id="Ligne_5" data-name="Ligne 5" y1="12" x2="19" transform="matrix(-1, -0.017, 0.017, -1, 1640.791, 781.002)" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-width="3"/>
            <line id="Ligne_6" data-name="Ligne 6" x2="19" y2="13.5" transform="matrix(-1, -0.017, 0.017, -1, 1640.791, 794.832)" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-width="3"/>
          </g>
        </svg>
      </div>
    </div>
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
