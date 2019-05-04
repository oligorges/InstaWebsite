<template>
    <div id="topic">
      <div v-for="item in Topics" :key="item.Name">
        <router-link :to="getPath(item.Tag)">
          <imagebox class="imagebox"  :config="config" :text="item.Title" :img="item.Image" :group="true" />
        </router-link>
      </div>  
  
    </div>
  </template>
  
  <script>
  import imagebox from '@/components/imagebox.vue'
  import axios from 'axios'

  export default {
    name: 'groups',
    components: {
      imagebox
    },
    props:{ 
        config: Array
    },
    data:   function () {
    return {
        Topics: []
        }
    },
    created: function(){
        this.loadData()
    },
    methods:{
      loadData(){
        axios.get('/topic/displayed').then(top => {
                this.Topics = top.data
            }).catch(()=>{
                //alert('Cant load Topics')
            })
      },
      getPath(tag){
        return '/topic/'+tag
      }
    }
  }
  </script>
  <style>
  #topic{
    padding: 5vh 5vw 5vh 5vw;
  }
  .imagebox{
    max-width: 90vw;
  }
  </style>
      