<template>
  <div class="flex justify-center w-10/12">
    <ul class=" w-full grid grid-cols-4 gap-4 max-lg:grid-cols-1 " >
      <li class=" bg-slate-800 rounded-lg  flex flex-col items-center  w-full " v-for="character in characters.data" :key="character.id">
        <img class="rounded-full w-40 my-4 " :src="character.image" alt="">
        <h3 class=" text-white text-base font-bold pb-2.5 ">{{ character.name }}</h3>
        <div class="flex flex-row w-4/12 justify-center pb-4">
          <p class="text-cyan-300 py-0.5 p-2 bg-type rounded text-xs">{{ character.gender }}</p>
          <p class="text-cyan-300 mx-1 py-0.5 bg-type p-2 bg-slate-50 rounded text-xs" >{{ character.species }}</p>
          <p class="text-cyan-300 py-0.5 p-2 bg-type bg-slate-50 rounded text-xs">{{ character.status }}</p>
        </div>
      </li>
    </ul>
    <div v-if="loading.value">Loading...</div>
  </div>
</template>

<script>
import { watch, reactive, onMounted, ref } from "vue";
import { GET_CHARACTERS } from "../graphql/query.js";
import client from "../graphql/client.js";

export default {
  name: "character",
  props: {
    filters: Object,
  },
  setup(props) {
    const characters = reactive({
      data: [],
    });

    const loading = ref(true);
    const error = ref(null);

    const fetchCharacters = async () => {
      loading.value = true;
      try {
        const { data } = await client.query({
          query: GET_CHARACTERS,
          variables: {
            gender: props.filters.gender,
            species: props.filters.species,
            status: props.filters.status,
          },
        });
        characters.data = data.characters.results;
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchCharacters);

    watch(
      () => props.filters,
      () => {
        fetchCharacters();
      },
      { deep: true }
    );

    return {
      characters,
      loading,
      error,
    };
  },
};
</script>