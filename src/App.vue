<template>
  <div class="bg-slate-900 flex flex-col items-center" >
    <div class="flex justify-center pt-12">
      <img class="w-6/12 " src="./assets/logo_RickAndMorty.png" alt="">
    </div>
    <div class="w-10/12">
      <h1 class="font-bold text-4xl text-white " >Characters</h1>
    </div>
    <Modal @update-filter="updateFilter" />
<Characters :filters="filters" />
    
  </div>
</template>

<script>
import Characters from "./components/Characters.vue";
import Modal from "./components/Modal.vue";
export default {
  components: {
    Characters,
    Modal,
  },
  data() {
    return {
      filters: {
        gender: null,
        status: null,
        species: null,
      },
    };
  },
  methods: {
    updateFilter({ type, value }) {
      this.filters[type] = value === "all" ? null : value;
    },
  },
};
</script>

<style>
input.bg-color-change:checked ~ label {
  background-color: blue;
  border-color: blue;
}

</style>