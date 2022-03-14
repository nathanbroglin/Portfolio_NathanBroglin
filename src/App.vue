<template>
  <div id="app">
    <header class="navbar">
      <img src="../static/img/logo.png" alt="#">
      <nav>
        <li><router-link to="/projets">PROJETS</router-link></li>
        <li><router-link to="/a_propos">A PROPOS</router-link></li>
      </nav>
    </header>

    <!-- point insertion des composants-->
    <router-view></router-view>



  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


