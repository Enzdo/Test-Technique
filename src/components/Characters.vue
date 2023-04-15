<template>
  <div>
    <ul>
      <li v-for="character in characters.data" :key="character.id">
        <img :src="character.image" alt="">
        <p class="text-4xl">{{ character.name }} - {{ character.species }} - {{ character.status }} - {{ character.gender }}</p>
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
