<template>
    <div id="topic">
        <button @click="back">Back</button>
        <h1>{{ $route.params.tag }}</h1>
        <div v-for="item in Images" :key="item.text">
            <span v-on:blur="focus" v-on:click="big(item.link)">
                <imagebox :text="item.text" :img="item.thumb" />
            </span>
        </div>
        <div @click="hide"><overlay :image="selected" :hidden="hidden" ></overlay></div>
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
    data:   function () {
        return {
            selected: "",
            hidden: true,
            Images: []
        }
    },
    created: function(){
        this.loadData()
    },
    methods:{
        big (link){
            this.selected = "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
            this.hidden = false
        },
        hide (){
            this.hidden = true
        },
        loadData (){
            axios.get(`/image?Topic=${this.$route.params.tag}&Displayed=true`).then(img => {
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
<style>
#topic{
    align-content: center;
}
</style>
      