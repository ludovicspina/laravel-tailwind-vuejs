<template>
    <div>
        <button v-on:click="deployed = !deployed"
                class="text-white bg-blue-600 p-2 shadow-xl w-40 transition duration-150 hover:bg-blue-500">Contact
        </button>
        <div v-show="deployed" class="bg-gray-100 p-2 shadow">
            <!-- <form class="flex flex-col">
                <div class="text-center">06 51 15 26 00</div>
                <div class="text-center">ludovic.spina</div>
                <ul>
                    <li>- @icloud.com</li>
                    <li>- @vesoul.fr</li>
                    <li>- @protonmail.com</li>
                </ul>
            </form> -->
            <div>01 02 03 04 05</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact-form-component",
    data() {
        return {
            deployed: false,
        }
    }
}
</script>

<style scoped>

</style>
