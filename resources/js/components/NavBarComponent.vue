<template>
    <div>
        <!-- Le template -->
        <!--<button v-on:click="deployed = !deployed" class="text-white bg-blue-600 p-2 shadow-xl w-40 transition duration-150 hover:bg-blue-500">Se connecter
        </button>
        <div v-show="deployed" class="bg-gray-100 p-2 shadow">
            <form class="flex flex-col justify-center">
                <label>Identifiant :</label>
                <input type="text" id="identifiant" name="identifiant" size="10" required class="rounded shadow">
                <label>Mot de passse :</label>
                <input type="password" id="motdepasse" name="motdepasse" size="10" required class="rounded shadow">
                <button type="submit" class="bg-gray-200 rounded p-1 mt-2 shadow">Valider</button>
            </form>
        </div>-->
        <div class="flex flex-row-reverse">

            <button @click="deployed = !deployed" class="z-10">
                <img src="https://picsum.photos/200/200"
                     class="bg-cover bg-center rounded-full h-18 w-18 border border-2 border-gray-200">
            </button>


            <transition name="slide-fade">
                <div v-show="deployed" class="bg-primary w-auto h-18 pl-6 pr-24 absolute rounded-full shadow-lg">

                    <ul class="flex gap-x-2 h-full items-center">
                        <li>
                            Menu1
                        </li>
                        <li>Menu 2</li>
                        <li>
                            <main-component></main-component>
                        </li>
                    </ul>


                </div>

            </transition>

        </div>
    </div>
</template>

<style>
/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
{
    transform: translateX(10px);
    opacity: 0;
}

/*-------------------------- */

</style>

<script>
// Le script
export default {
    name: "navbar-component",
    data() {
        return {
            deployed: true,
        }
    }
}
</script>
