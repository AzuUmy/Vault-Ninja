<template>
    <section>
        <div class="SearchBarElement">
            <div>
                  <input @click="searchBarInteraction" class="SearchBar" type="text" placeholder="  Pesquisar">
            </div>
            <div :style="{opacity: dropDownOpacity, maxHeight: DropDownListHeigh}" class="SearchDropDownList">
                <div class="DropDownListElements">
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                    <p>teste</p> 
                </div>
             
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
              dropDownOpacity: '',
              DropDownListHeigh: '',
              dropDownIsActive: false,
        }
      
    },

    methods:{
        searchBarInteraction(){
            this.dropDownIsActive = true;

            if(this.dropDownIsActive === true){
                 this.dropDownOpacity ='100%';
                 this.DropDownListHeigh = '500px';
                console.log(this.dropDownIsActive);
            }
               

                let SearchBar = document.querySelector(".SearchBar");
                document.addEventListener('click', (event) =>{
                    if(!SearchBar.contains(event.target)){
                        this.dropDownIsActive = false;

                       if(this.dropDownIsActive === false){
                            console.log(this.dropDownIsActive);
                            this.dropDownOpacity ='';
                            this.DropDownListHeigh = '';
                       }
                    }
                });
        },
      
        
    },

    components: {
        
    }
}
</script>