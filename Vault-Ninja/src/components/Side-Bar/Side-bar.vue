<template>
        <section class="SideBar">
            <div class="userBgm">
                <div class="userAvatar">

                </div>
            </div>
            <div class="SideBarInteractions">
                        <div class="UserNickName">
                        
                        <div>
                            <p class="UserName">{{ NickName }}</p>
                        </div>
                       
                        </div>
                        <div class="InteractiveButtons">
                            <div>
                                <HubButtom :style="{ fill: ButtonColors.hub, height: ButtonHeigh.hub, 
                                    width: ButtonWidth.hub, background: AddBackground.hub, filter: addFilter.hub}" @click="selecButton('hub')"></HubButtom>
                            </div>
                            <div>
                                
                                <AddButton :style="{ fill: ButtonColors.add, height: ButtonHeigh.add, 
                                    width: ButtonWidth.add, background: AddBackground.add, filter: addFilter.add}" @click="selecButton('add', '/add')"></AddButton>
                            </div>
                            <div>
                                <stackView :style="{ fill: ButtonColors.stack, height: ButtonHeigh.stack, 
                                    width: ButtonWidth.stack, background: AddBackground.stack, filter: addFilter.stack}" @click="selecButton('stack')"></stackView>
                            </div>
                            <div>
                                <Settings :style="{ fill: ButtonColors.settings, height: ButtonHeigh.settings, 
                                    width: ButtonWidth.settings, background: AddBackground.settings, filter: addFilter.settings}" @click="selecButton('settings')"></Settings>
                            </div>
                            
                        </div>
            </div>
           
        </section>

        
</template>

<script>
import { useRouter } from 'vue-router';
import AddButton from '../icons/add-icon.vue';
import HubButtom from '../icons/hub-icon.vue';
import stackView from '../icons/stacked.vue';
import Settings from '../icons/settings.vue';


export default{
    data() {
        return{
            NickName: 'Carlos',

           ButtonColors: {
            hub: '',
            add: '',
            stack: '',
            settings: ''
           },
           ButtonHeigh: {
            hub: '',
            add: '',
            stack: '',
            settings: ''
           },
           ButtonWidth: {
            hub: '',
            add: '',
            stack: '',
            settings: ''
           },
           AddBackground: {
            hub: '',
            add: '',
            stack: '',
            settings: ''
           },
           addFilter: {
            hub: '',
            add: '',
            stack: '',
            settings: ''
           }
        }
    },

    methods: {
        selecButton(buttonName, route){
            Object.keys(this.ButtonColors).forEach((name) => {
                this.ButtonColors[name] = '';
                this.ButtonHeigh[name] = '';
                this.ButtonWidth[name] = '';
                this.addFilter[name] = '';
            });

                this.ButtonColors[buttonName] = 'rgb(0, 195, 255)';
                this.ButtonHeigh[buttonName] = '45px';
                this.ButtonWidth[buttonName] = '40px';
                this.addFilter[buttonName] = ' drop-shadow(0 0 0.75rem rgb(128, 240, 119, 0.229))';
                
                const router = this.$router;
                router.push(route);
    
        },
    },

    components: {
        AddButton,
        HubButtom,
        stackView,
        Settings
    }
}
</script>