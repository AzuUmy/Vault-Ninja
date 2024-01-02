<template>
    <div class="CaracterSelectorElement">
      <div class="CaractereSelector">
        <p>Selecionar Tipos de Caracteres</p>
      </div>
      <div>
        <div class="DotSelector">
          <div class="PlacementDotselector">
            <p class="textIndicator">CC</p>
            <div :style="{ background: DotBackground[0] }" @click="toggleColor(0, 'rgb(0, 195, 255)')" class="DotElementSelector"></div>
          </div>
  
          <div class="PlacementDotselector">
            <div :style="{ background: DotBackground[1] }" @click="toggleColor(1, 'rgb(0, 195, 255)')" class="DotElementSelector"></div>
            <p class="textIndicator">%$</p>
          </div>
        </div>
  
        <div class="DotSelector">
          <div class="PlacementDotselector">
            <p class="textIndicator">12</p>
            <div :style="{ background: DotBackground[2] }" @click="toggleColor(2, 'rgb(0, 195, 255)')" class="DotElementSelector"></div>
          </div>
          <div class="PlacementDotselector">
            <div :style="{ background: DotBackground[3] }" @click="toggleColor(3, 'rgb(0, 195, 255)')" class="DotElementSelector"></div>
            <p class="textIndicator">Cc</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapState(['options']),
    },

    data() {
      return {
        DotBackground: ['', '', '', ''],
      };
    },

    methods: {
      ...mapMutations(['setOptions']), // Update the mutation name

      toggleColor(dotIndex, activeColor) {
        const updatedOptions = { ...this.options }; // Copy options object

        if (this.DotBackground[dotIndex] === activeColor) {
          this.DotBackground[dotIndex] = '';
          updatedOptions.uperCase = false;
          updatedOptions.lowerCase = false;
          updatedOptions.Number = false;
          updatedOptions.specialCharacters = false;
 
        } else {
          this.DotBackground[dotIndex] = activeColor;
          if (dotIndex === 0) {
        updatedOptions.uperCase = true;
            } else if (dotIndex === 1) {
              updatedOptions.specialCharacters = true;
            } else if (dotIndex === 2) {
              updatedOptions.Number = true;
            } else if (dotIndex === 3) {
              updatedOptions.lowerCase = true;
               }
         
 
        }

        this.setOptions(updatedOptions);
        console.log('Options after toggle:', this.options);
      },
    },
  };
</script>