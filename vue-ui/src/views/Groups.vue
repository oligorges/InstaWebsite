<template>
        <div>
          <div v-for="item in Topics" :key="item.Name">
            <router-link :to="getPath(item.Tag)">
              <imagebox :text="item.Name" :img="item.Image" />
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
            axios.get('/topic').then(top => {
                    this.Topics = top.data
                }).catch(()=>{
                    alert('Cant load Topics')
                })
          },
          getPath(tag){
            return '/topic/'+tag
          }
        }
      }
      </script>
      <style>
      
      </style>
      