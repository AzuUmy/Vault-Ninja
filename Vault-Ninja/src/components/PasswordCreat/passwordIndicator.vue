<template>
<section>
    <div class="PasswordElement">
       
        <div class="PassworDivision">
            
            <div class="InputPswdf">
                <h1 class="TitlePs">Senha Gerada</h1>
                <div class="PasswordIndicator">
                     <input v-model="Password" class="PasswordIput" placeholder="ASKJH$%%$fwer686Fasd" @input="manualPasswordLengthUpdater" maxlength="30" type="text">
                </div>
                <div class=DotIndicator>
                    <div class="DotWraper">
                        <div class="DIVdOT">
                            <div class="PsswordIndicatroDots"></div><p>Caixa Alta</p>
                        </div>
                       
                        <div class="DIVdOT">
                            <div class="PsswordIndicatroDots"></div><p>Numeros</p>
                        </div>
                        <div class="DIVdOT">
                            <div class="PsswordIndicatroDots"></div><p>Caractere Especial</p>
                        </div>
                    </div>
                    
                </div>
            </div>


            <div>
             <P>Temp Elementqwewqeqweqweqwewqeqwewqweqweqweqweqweqweqweqwe</P>
            </div>
        </div>
    </div>
</section>
</template>


<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['number', 'selectedOptions']),
        reactiveNumber() {
        return this.number;
    },
  },

  data() {
    return {
      Password: '',
      PasswordLength: this.reactiveNumber,
      characterSets: {
        UperCase: 'ABCDEFGHIJKLMNOPQRSTUVW',
        LowerCase: 'abcdefghijklmnopqrstuvwxyz',
        Numbers: '1234567890',
        SpecialCharacters: '!@#$%^&*():"><{}|\/?<>+=_-[].,"'
      },
    
    };
  },

  watch: {
    reactiveNumber(newVal) {
      this.PasswordLength = newVal;
      this.GenerateRamdomPassword();
    },
  },

  methods: {
    ...mapMutations(['setNumber']),
        
                  GenerateRamdomPassword() {
                    let passwordLength = this.PasswordLength;
                    let selectedCharacterSets = this.characterSets.UperCase; // Default to uppercase

                    // Ensure that this.selectedOptions is defined before using it
                    if (this.selectedOptions && this.selectedOptions.length > 0) {
                      if (this.selectedOptions.includes('UperCase')) {
                        selectedCharacterSets = this.characterSets.UperCase;
                      } else if (this.selectedOptions.includes('LowerCase')) {
                        selectedCharacterSets = this.characterSets.LowerCase;
                      } else if (this.selectedOptions.includes('Numbers')) {
                        selectedCharacterSets = this.characterSets.Numbers;
                      } else if (this.selectedOptions.includes('SpecialCharacters')) {
                        selectedCharacterSets = this.characterSets.SpecialCharacters;
                      }
                    }

                let randomString = '';

                for (let i = 0; i < passwordLength; i++) {
                  const randomIndex = Math.floor(Math.random() * selectedCharacterSets.length);
                  randomString += selectedCharacterSets.charAt(randomIndex);
                }

                this.Password = randomString;
              },
  },

  mounted() {
    this.GenerateRamdomPassword();
  },
};
</script>