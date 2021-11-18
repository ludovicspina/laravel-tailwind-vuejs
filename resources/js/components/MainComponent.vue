<template>
    <div>
        <button v-on:click="deployed = !deployed" v-bind:class="{ 'rounded-t':deployed === true, 'rounded':deployed === false}" class="text-white bg-blue-600 p-2 shadow-xl w-40 transition duration-150 hover:bg-blue-500">Se connecter
        </button>
        <div v-show="deployed" class="absolute w-40 bg-gray-100 p-2 shadow">
            <form class="flex flex-col">
                <label>Identifiant :</label>
                <input type="text" id="identifiant" name="identifiant" size="10" required class="rounded shadow">
                <label>Mot de passse :</label>
                <input type="password" id="motdepasse" name="motdepasse" size="10" required class="rounded shadow">
                <button type="submit" class="bg-gray-200 rounded p-1 mt-2 shadow">Valider</button>
            </form>
        </div>
    </div>
</template>

<script>
// Le script
export default {
    name : "main-component",
    data() {
        return {
            deployed: false,
        }
    }
}
</script>
