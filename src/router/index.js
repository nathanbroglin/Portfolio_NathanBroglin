import Vue from 'vue'
import Router from 'vue-router'
import A_propos from '../components/A_propos.vue';
import Accueil from '../components/Accueil.vue';
import Projets from '../components/Projets.vue';
import Projet1 from '../components/Projet1.vue';
import Projet2 from '../components/Projet2.vue';
import Projet3 from '../components/Projet3.vue';
import Projet4 from '../components/Projet4.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',          name: 'Accueil',        component: Accueil } ,
    { path: '/a_propos',     name: 'A_propos',          component: A_propos },
    { path: '/projets',    name: 'Projets',         component: Projets },
    { path: '/projet1',      name: 'Projet1',           component: Projet1 },
    { path: '/projet2',      name: 'Projet2',           component: Projet2 },
    { path: '/projet3',      name: 'Projet3',           component: Projet3 },
    { path: '/projet4',      name: 'Projet4',           component: Projet4 },

  ]
})
