<template>
    <section>
      <div>
        <div class="caracteres">
          <div class="cacracterIndetifier">
            <div :style="{background: ChangeBackground, color: changeColor}" class="numberElement">
              <div class="NumberIdentrifierElement">
                <p>{{ number }}</p>
              </div>
              <div class="CaracterDescription">caracteres</div>
            </div>
  
            <div  class="caracterContoler">
              <div>
                <div class="Slider">
                    <div>
                        <div>
                            <p class="DescriptionSlider">Selecionar quantidade de Caracteres</p>
                        </div>
                        <div>
                             <SliderIcon :style="{ fill: elementFill, marginLeft: IconInitialPosition + 'px'}"></SliderIcon>
                        </div>
                        
                    </div>
                 
                  <div class="SliderBan"></div>
                  <div class="SliderDots">
                    <div class="Dots">
                      <div
                        v-for="dotIndex in 5"
                        :key="dotIndex"
                        @click="updateNumber(dotIndex)"
                        :class="{ 'Dot': true, 'SelectedDot': dotIndex <= selectedDot }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                  <div>
                  <PasswordCaracterGenerator></PasswordCaracterGenerator>
                      
                  </div>
        </div>
      </div>
     
    </section>

    <section>
      <PasswordSection></PasswordSection>
    </section>
  </template>
  
  <style scoped>
  .SelectedDot {
    background-color: rgb(0, 195, 255);
  }
  </style>
  
  <script>
  import { mapState } from 'vuex';
  import SliderIcon from '../icons/slider-Ban.vue';
  import PasswordCaracterGenerator from '../PasswordCreat/caracter-content.vue';
  import PasswordSection from '../PasswordCreat/passwordIndicator.vue';
  
  export default {
    computed: {
      ...mapState(['number']),
    },
  
    data() {
      return {
        sliderValue: 0,
        IconInitialPosition: 0,
        iconMovement: 0,
        iconMovementIncrement: 98,
        ChangeBackground: '',
        changeColor: '',
        elementFill: '',
        DotBackground: ['', '', '', ''],
      };
    },
  
    methods: {
      updateNumber(dotIndex) {
        this.selectedDot = dotIndex;
        const newNumber = dotIndex * 5 + 5;
        this.sliderValue = newNumber > 25 ? 30 : newNumber;
        this.IconInitialPosition = dotIndex * this.iconMovementIncrement - 99;
        this.ChangeBackground = 'rgb(0, 195, 255)';
        this.changeColor = 'white';
        this.elementFill = 'rgb(0, 195, 255)';
  
        // Update 'number' in the Vuex store
        this.$store.commit('setNumber', this.sliderValue);
      },

     
      mounted() {
        this.updateNumber();
      },
    },
  
    components: {
      SliderIcon,
      PasswordCaracterGenerator,
      PasswordSection,
    },
  };
  </script>