<template>
    <div class="bg-slate-800 w-10/12 h-min my-4 px-8 py-9 flex flex-col rounded-lg">
        <div class="flex flex-row w-full justify-between">
            <div class="w-6/12 pr-3">
                <h3 class="text-lg text-white font-medium pb-3" >Gender</h3>
                <div class=" flex flex-col items-start	">
                    <label for="all-1" :class="[
      'border-2',
      'rounded',
      'w-full',
      'text-white',
      'text-sm',
      'flex',
      'items-start',
      'px-4',
      'py-4',
      'my-2',
      'flex',
      'items-center',
      'justify-between',
      'radio-container',
      isSelected ? 'bg-blue-500 border-blue-500' : 'bg-none border-black'
    ]"
    @click="toggleSelected">
                        <div class="">
                            <h3>All</h3>
                        </div>
                            <input :class="[
        isSelected ? 'bg-blue-500 border-blue-500' : 'bg-none border-black'
      ]" type="radio" name="gender" id='all-1' value="all" @change="updateFilter('gender', 'all')">
                    </label>
                    <label for="Male" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between focus:border-sky-500" >
                            <div class="">
                                <h3>Male</h3>
                            </div>
                        <input type="radio" class="focus:bg-cyan-800" id="Male" name="gender" value="male" @change="updateFilter('gender', 'male')">
                    </label>
                    <label for="Female" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                            <div class="">
                                <h3>Female</h3>
                            </div>
                        <input type="radio" name="gender" id="Female" value="female" @change="updateFilter('gender', 'female')" >
                    </label>
                    <label for="unknown-1" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                            <div class="">
                                <h3>Unknown</h3>
                            </div>
                        <input type="radio" name="gender" id="unknown-1" value="unknown" @change="updateFilter('gender', 'unknown')" >
                    </label>
                </div>
            </div>
            <div class="w-6/12 pl-3">
                    <h3 class="text-lg text-white font-medium pb-3" >Status</h3>
                    <div class="flex flex-col items-start">
                        <label for="all-2" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                            <div class="">
                                <h3>All</h3>
                            </div>
                                <input type="radio" id="all-2" name="status" value="all" @change="updateFilter('status', 'all')" >
                            </label>
                            <label for="alive" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Alive</h3>
                                    </div>
                                <input type="radio" name="status" id='alive' value="alive" @change="updateFilter('status', 'alive')" >
                            </label>
                            <label for="dead" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Dead</h3>
                                    </div>
                                <input type="radio" name="status" id="dead" value="dead" @change="updateFilter('status', 'dead')" >
                            </label>
                                <label for="unknown-2" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                        <div class="">
                                            <h3>Unknown</h3>
                                        </div>
                                    <input type="radio" name="status" id="unknown-2" value="unknown" @change="updateFilter('status', 'unknown')" >
                                </label>           
                    </div>
            </div>
        </div>
       
       <div class="py-6 ">
            <h3 class="text-lg text-white font-medium pb-3" >Species</h3>
            <div class="flex flex-row w-full justify-between max-lg:flex max-lg:flex-col">
                <div class=" w-6/12 pr-3 max-lg:pr-0 w-full">
                    <label for="all-3" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between max-lg:mx-none" >
                                    <div class="">
                                        <h3>All</h3>
                                    </div>
                                <input type="radio" name="Species" id="all-3" value="all" @change="updateFilter('species', 'all')" > 
                            </label>
                            <label for="alien" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between " >
                                    <div class="">
                                        <h3>Alien</h3>
                                    </div>
                                    <input type="radio" name="Species" id="alien" value="alien" @change="updateFilter('species', 'alien')" > 
                            </label>
                            <label for="Myth" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Myth Creature</h3>
                                    </div>
                                    <input type="radio" name="Species" id='Myth' value="mythological" @change="updateFilter('species', 'mythological')" > 
                            </label>
                            <label for="Humanoid" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Humanoid</h3>
                                    </div>
                                    <input type="radio" name="Species" id="Humanoid" value="mythological" @change="updateFilter('species', 'humanoid')" > 
                            </label>
                            <label for="Animal" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Animal</h3>
                                    </div>
                                    <input type="radio" name="Species" id="Animal" value="mythological" @change="updateFilter('species', 'animal')" > 
                            </label>
                </div>
                <div class="w-6/12 max-lg:pl-0 w-full">
                    <label for="Human" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Human</h3>
                                    </div>
                                    <input type="radio" name="Species" id="Human" value="human" @change="updateFilter('species', 'human')" > 
                            </label>
                            <label for="Robot" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Robot</h3>
                                    </div>
                                    <input type="radio" name="Species" id="Robot" value="human" @change="updateFilter('species', 'robot')" > 
                            </label>
                            <label for="Disease" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Disease</h3>
                                    </div>
                                    <input type="radio" name="Species" id="Disease" value="disease" @change="updateFilter('species', 'disease')" > 
                            </label>
                            <label for="Poopybutthole" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Poopybutthole</h3>
                                    </div>
                                    <input type="radio" name="Species" id="Poopybutthole" value="poopybutthole" @change="updateFilter('species', 'poopybutthole')" > 
                            </label>
                            <label for="Cronenberg" class="bg-none border-black border-2 rounded w-full text-white text-sm flex items-start px-4 py-4 my-2 flex items-center justify-between" >
                                    <div class="">
                                        <h3>Cronenberg</h3>
                                    </div>
                                    <input type="radio" name="Species" id="Cronenberg" value="cronenberg" @change="updateFilter('species', 'cronenberg')" > 
                            </label>
                            
                </div>
            </div>
            
       </div>
    </div>
    
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    toggleSelected() {
      this.isSelected = !this.isSelected;
    },  
    updateFilter(type, value) {
      this.$emit("update-filter", { type, value });
    },
  },
};



</script>

<style>




</style>