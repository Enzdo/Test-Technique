<template>
  <div class="bg-slate-900 flex flex-col items-center" >
    <div class="flex justify-center pt-12">
      <img class="w-6/12 " src="./assets/logo_RickAndMorty.png" alt="">
    </div>
    <div class="w-10/12">
      <h1 class="font-bold text-2xl" >Characters</h1>
    </div>
    
    <div class="">

    </div>
    <Characters/>
    
  </div>
</template>

<script>
import Characters from './components/Characters.vue'

export default {
  components: {
    Characters
    },
}
</script>
