<template>
        <section class="SideBar">
            <div class="userBgm">
                <div class="userAvatar">

                </div>
            </div>
            <div class="SideBarInteractions">
                        <div class="UserNickName">
                        <p>Hi!</p>
                        <div>
                            <p class="UserName">{{ NickName }}</p>
                        </div>
                       
                        </div>
                        <div class="InteractiveButtons">
                            <div>
                                <HubButtom></HubButtom>
                            </div>
                            <div>
                                <AddButton :style="{ fill: ButtonColors, height: ButtonHeigh, 
                                    width: ButtonWidth, background: AddBackground}" @click="selecButton"></AddButton>
                            </div>
                            <div>
                                <stackView></stackView>
                            </div>
                            <div>
                                <Settings></Settings>
                            </div>
                            
                        </div>
            </div>
           
        </section>

        
</template>

<script>
import AddButton from '../icons/add-icon.vue'
import HubButtom from '../icons/hub-icon.vue'
import stackView from '../icons/stacked.vue'
import Settings from '../icons/settings.vue'
export default{
    data() {
        return{
            NickName: 'Eva',
            ButtonColors: '',
            ButtonHeigh: '',
            ButtonWidth: '',
            AddBackground: '',
        }
    },

    methods: {
        selecButton(){
           this.ButtonColors = 'white';
           this.ButtonHeigh = '35px';
           this.ButtonWidth = '35px';
           this.AddBackground = 'rgba(1, 148, 228, 0.801)';
    
        } 
    },

    components: {
        AddButton,
        HubButtom,
        stackView,
        Settings
    }
}
</script>