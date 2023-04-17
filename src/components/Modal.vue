<template>
    <div class="bg-slate-800 w-10/12 h-min my-4 px-8 py-9 flex flex-col rounded-lg">
        <div class="flex flex-row w-full justify-between">
            <div class="w-6/12 pr-3">
                <h3 class="text-lg text-white font-medium pb-3" >Gender</h3>
                <div class=" flex flex-col items-start	">
                    <div
                            for="all-1"
                            :class="[
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
                                isActive('gender', 'all') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                            ]"
                            @click="updateFilter('gender', 'all')"
                            >
                            <div class="">
                                <h3> <font-awesome-icon icon="fa-solid fa-genderless" ></font-awesome-icon> All</h3>
                            </div>
                        <label for="all-1" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('gender', 'all') ? 'bg-white border-cyan-500 border-6' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </div>
                    <label for="Male" :class="[
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
                                isActive('gender', 'male') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                            ]"
                            @click="updateFilter('gender', 'male')"
                            > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'mars']" ></font-awesome-icon> Male</h3>
                            </div>
                            <label for="Male" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('gender', 'male') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>
                    <label for="Female" :class="[
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
                                isActive('gender', 'female') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                            ]"
                            @click="updateFilter('gender', 'female')"
                            > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'venus']" /> Female</h3>
                            </div>
                            <label for="female" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('gender', 'female') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>
                    <label for="unknown-1" :class="[
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
                                isActive('gender', 'unknown') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                            ]"
                            @click="updateFilter('gender', 'unknown')"
                            > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'transgender']" /> Unknown</h3>
                            </div>
                            <label for="unknown-1" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('gender', 'unknown') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>
                </div>
            </div>
            <div class="w-6/12 pl-3">
                    <h3 class="text-lg text-white font-medium pb-3" >Status</h3>
                    <div class="flex flex-col items-start">
                        <label for="all-2" :class="[
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
                                    isActive('status', 'all') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('status', 'all')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon icon="fa-solid fa-face-meh-blank" style="color: #ffffff;" ></font-awesome-icon> All</h3>
                            </div>
                            <label for="all-2" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('status', 'all') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>
                    
                    <label for="alive" :class="[
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
                                    isActive('status', 'alive') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('status', 'alive')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon icon="fa-solid fa-face-smile" style="color: #ffffff;" ></font-awesome-icon> Alive</h3>
                            </div>
                            <label for="alive" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('status', 'alive') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>
                    <label for="dead" :class="[
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
                                    isActive('status', 'dead') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('status', 'dead')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'face-dizzy']" style="color: #ffffff;" ></font-awesome-icon> Dead</h3>
                            </div>
                            <label for="dead" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('status', 'dead') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>
                    <label for="Unknown-2" :class="[
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
                                    isActive('status', 'unknown') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('status', 'unknown')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'face-meh']" ></font-awesome-icon> Unknown</h3>
                            </div>
                            <label for="Unknown-2" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('status', 'unknown') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>          
                    </div>
            </div>
        </div>
       
       <div class="py-6 ">
            <h3 class="text-lg text-white font-medium pb-3" >Species</h3>
            <div class="flex flex-row w-full justify-between max-lg:flex max-lg:flex-col">
                <div class=" w-6/12 pr-3 max-lg:pr-0 w-full">
                    <label for="all-3" :class="[
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
                                    isActive('species', 'all') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'all')"
                                > 
                            <div class="flex flex-row">
                                <h3> <font-awesome-icon :icon="['fas', 'users']" /> All</h3>
                            </div>
                            <label for="all-3" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'all') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>   
                    <label for="alien" :class="[
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
                                    isActive('species', 'alien') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'alien')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'user-astronaut']" /> Alien</h3>
                            </div>
                            <label for="alien" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'alien') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label>
                    <label for="Myth" :class="[
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
                                    isActive('species', 'mythological') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'mythological')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'dragon']" /> Myth Creature</h3>
                            </div>
                            <label for="Myth" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'mythological') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label> 
                    
                    <label for="Humanoid" :class="[
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
                                    isActive('species', 'humanoid') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'humanoid')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'person-walking']" /> Humanoid</h3>
                            </div>
                            <label for="Humanoid" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'humanoid') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label> 
                    <label for="animal" :class="[
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
                                    isActive('species', 'animal') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'animal')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'dog']" /> Animal</h3>
                            </div>
                            <label for="animal" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'animal') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label> 
                </div>
                <div class="w-6/12 max-lg:pl-0 w-full">
                    <label for="human" :class="[
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
                                    isActive('species', 'human') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'human')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'person']" /> Human</h3>
                            </div>
                            <label for="human" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'human') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label> 
                    <label for="robot" :class="[
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
                                    isActive('species', 'robot') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'robot')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'robot']" /> Robot</h3>
                            </div>
                            <label for="robot" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'robot') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label> 
                    <label for="disease" :class="[
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
                                    isActive('species', 'disease') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'disease')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'disease']" /> Disease</h3>
                            </div>
                            <label for="disease" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'disease') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label> 
                    <label for="Poopybutthole" :class="[
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
                                    isActive('species', 'poopybutthole') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'poopybutthole')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'poo']" /> Poopybutthole</h3>
                            </div>
                            <label for="Poopybutthole" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'poopybutthole') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
                    </label> 
                    <label for="Cronenberg" :class="[
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
                                    isActive('species', 'cronenberg') ? 'bg-cyan-500/10 border-cyan-500' : 'border-slate-900 border-black'
                                ]"
                                @click="updateFilter('species', 'cronenberg')"
                                > 
                            <div class="">
                                <h3> <font-awesome-icon :icon="['fas', 'bug']" /> Cronenberg</h3>
                            </div>
                            <label for="Cronenberg" :class="[
                                'rounded-full',
                                'border-4',
                                'w-4',
                                'h-4',
                                isActive('species', 'cronenberg') ? 'bg-white border-cyan-500 ' : 'bg-slate-900 border-slate-900'
                            ]" >

                        </label>
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
      selected: {
        gender: '',
        status: '',
        species: '',
      },
    };
  },
  methods: {
    updateFilter(type, value) {
      this.selected[type] = value;
      this.$emit("update-filter", { type, value });
    },
    isActive(type, value) {
      return this.selected[type] === value;
    },
  },
};

</script>

<style>




</style>