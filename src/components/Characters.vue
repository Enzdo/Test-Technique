<template>
  <div class="flex justify-center w-10/12">
    <ul class=" w-full grid grid-cols-4 gap-4" >
      <li class=" bg-slate-800 rounded-lg  flex flex-col items-center  w-full " v-for="character in characters.data" :key="character.id">
        <img class="rounded-full w-40 my-4 " :src="character.image" alt="">
        <h3 class=" text-white text-base font-bold pb-2.5 ">{{ character.name }}</h3>
        <div class="flex flex-row w-4/12 justify-center pb-4">
          <p class="text-cyan-300 py-0.5 p-2 bg-type rounded text-xs">{{ character.species }}</p>
          <p class="text-cyan-300 mx-1 py-0.5 bg-type p-2 bg-slate-50 rounded text-xs" >{{ character.status }}</p>
          <p class="text-cyan-300 py-0.5 p-2 bg-type bg-slate-50 rounded text-xs">{{ character.gender }}</p>
        </div>
      </li>
    </ul>
    <div v-if="loading.value">Loading...</div>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from 'vue'
import { GET_CHARACTERS } from '../graphql/query.js'
import client from '../graphql/client.js'

export default {
  name:'character',
  setup() {
    const characters = reactive({
      data: []
    })

    const loading = ref(true)
    const error = ref(null)

    onMounted(async () => {
      try {
        const { data } = await client.query({
          query: GET_CHARACTERS
        })
        console.log(data)
        characters.data = data.characters.results
      } catch (e) {
        error.value = e.message
      } finally {
        loading.value = false
      }
    })

    return {
      characters: characters,
      loading,
      error
    }
  }
}
</script>
