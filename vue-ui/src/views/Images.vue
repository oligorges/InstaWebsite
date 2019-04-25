<template>
    <div id="topic">
        
            <span class="back" @click="back"><</span>
        <h1>{{ Name }}</h1>
        <div v-for="item in Images" :key="item.Text">
            <span v-on:blur="focus" v-on:click="big(item.Link)">
                <imagebox :config="config" :text="item.Text" :img="item.Thumb" />
            </span>
        </div>
        <div @click="hide"><overlay :config="config" :image="selected" :hidden="hidden" ></overlay></div>
    </div>
    
</template>

<script>
import imagebox from '@/components/imagebox.vue'
import overlay from  '@/components/overlay.vue'
import axios from 'axios'

export default {
    name: 'images',
    components: {
        imagebox,
        overlay
    },
    props:{ 
        config: Array
    },
    data:   function () {
        return {
            selected: "",
            hidden: true,
            Images: [],
            Name: ''
        }
    },
    created: function(){
        this.loadData()
    },
    methods:{
        big (link){
            this.selected = link
            this.hidden = false
        },
        hide (){
            this.hidden = true
        },
        loadData (){
            axios.get(`/topic/${this.$route.params.tag}`).then(topic => {
                    this.Name = topic.data.Name
                }).catch(()=>{
                    alert('Cant load Data')
                })
            axios.get(`/image/displayed/${this.$route.params.tag}`).then(img => {
                    this.Images = img.data
                }).catch(()=>{
                    alert('Cant load Data')
                })
        },
        focus(){
            alert("Focus Loss")
        },
        back(){
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
#topic{
    align-content: center;
}
.back{
    font-size: 2rem;
    position: absolute;
    left: 4vw;
    cursor: pointer;
}
</style>
      