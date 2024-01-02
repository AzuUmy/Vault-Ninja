// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    number: 0,
    options: {
      uperCase: false,
      specialCharacters: false,
      Number: false,
      lowerCase: false,
    }
    
  },
  mutations: {
    setNumber(state, newNumber) {
      state.number = newNumber;
    },


    setOptions(state, newOptions){
    state.options = newOptions;
  }
 
  },
});