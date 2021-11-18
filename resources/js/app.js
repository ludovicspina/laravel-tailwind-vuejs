require('./bootstrap');

// 1. Importation de vue.js
import Vue from "vue"

// 2. Enregistrement du composant "MonComponent.vue"
Vue.component(
    "main-component",
    require("./components/MainComponent.vue").default)

Vue.component(
    "contact-form-component",
    require("./components/ContactFormComponent").default)

Vue.component(
    "navbar-component",
    require("./components/NavBarComponent.vue").default)

// 3. L'instance de l'application Vue
const app = new Vue({
    el: "#app"
});
