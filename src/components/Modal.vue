<template>
    <div class="bg-slate-800 w-10/12 h-min my-4 px-8 py-9 flex flex-col rounded-lg">
        <div class="flex flex-row w-full justify-between">
            <div class="w-6/12 pr-3">
                <h3 class="text-lg text-white font-medium pb-3" >Gender</h3>
                <div class=" flex flex-col items-start	">
                    <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                            <div class="">
                                <h3>All</h3>
                            </div>
                        <input type="radio" name="gender" value="all" @change="updateFilter('gender', 'all')" >
                    </label>
                    <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                            <div class="">
                                <h3>Male</h3>
                            </div>
                        <input type="radio" name="gender" value="male" @change="updateFilter('gender', 'male')">
                    </label>
                    <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                            <div class="">
                                <h3>Female</h3>
                            </div>
                        <input type="radio" name="gender" value="female" @change="updateFilter('gender', 'female')" >
                    </label>
                    <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                            <div class="">
                                <h3>Unknown</h3>
                            </div>
                        <input type="radio" name="gender" value="unknown" @change="updateFilter('gender', 'unknown')" >
                    </label>
                </div>
            </div>
            <div class="w-6/12 pl-3">
                    <h3 class="text-lg text-white font-medium pb-3" >Status</h3>
                    <div class="flex flex-col items-start">
                        <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                            <div class="">
                                <h3>All</h3>
                            </div>
                                <input type="radio" name="status" value="all" @change="updateFilter('status', 'all')" >
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Alive</h3>
                                    </div>
                                <input type="radio" name="status" value="alive" @change="updateFilter('status', 'alive')" >
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Dead</h3>
                                    </div>
                                <input type="radio" name="status" value="dead" @change="updateFilter('status', 'dead')" >
                            </label>
                                <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                        <div class="">
                                            <h3>Unknown</h3>
                                        </div>
                                    <input type="radio" name="status" value="unknown" @change="updateFilter('status', 'unknown')" >
                                </label>           
                    </div>
            </div>
        </div>
       
       <div class="py-6">
            <h3 class="text-lg text-white font-medium pb-3" >Species</h3>
            <div class="flex flex-row w-full justify-between">
                <div class=" w-6/12 pr-3">
                    <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>All</h3>
                                    </div>
                                <input type="radio" name="Species" value="all" @change="updateFilter('species', 'all')" > 
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Alien</h3>
                                    </div>
                                    <input type="radio" name="Species" value="alien" @change="updateFilter('species', 'alien')" > 
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Myth Creature</h3>
                                    </div>
                                    <input type="radio" name="Species" value="mythological" @change="updateFilter('species', 'mythological')" > 
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Humanoid</h3>
                                    </div>
                                    <input type="radio" name="Species" value="mythological" @change="updateFilter('species', 'humanoid')" > 
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Animal</h3>
                                    </div>
                                    <input type="radio" name="Species" value="mythological" @change="updateFilter('species', 'animal')" > 
                            </label>
                </div>
                <div class="w-6/12 pl-3">
                    <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Human</h3>
                                    </div>
                                    <input type="radio" name="Species" value="human" @change="updateFilter('species', 'human')" > 
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Robot</h3>
                                    </div>
                                    <input type="radio" name="Species" value="human" @change="updateFilter('species', 'robot')" > 
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Disease</h3>
                                    </div>
                                    <input type="radio" name="Species" value="disease" @change="updateFilter('species', 'disease')" > 
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Poopybutthole</h3>
                                    </div>
                                    <input type="radio" name="Species" value="poopybutthole" @change="updateFilter('species', 'poopybutthole')" > 
                            </label>
                            <label for="" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Cronenberg</h3>
                                    </div>
                                    <input type="radio" name="Species" value="cronenberg" @change="updateFilter('species', 'cronenberg')" > 
                            </label>
                            
                </div>
            </div>
            
       </div>
    </div>
    
</template>

<script>
export default {
  name: "modal",
  methods: {
    updateFilter(type, value) {
      this.$emit("update-filter", { type, value });
    },
  },
};
</script>

<style>

</style>