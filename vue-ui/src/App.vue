<template>
  <div id="app">
   
    <router-view :config="config"></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    components: {
    },
    data: function(){
      return{
        config: []
      }
    },
    created: function(){
        this.loadData()
    },
    methods:{
      loadData(){
        axios.get('/config/public').then(config => {
                this.config = config.data
            })
      }
    }
  }
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  overflow-x: hidden;
}
</style>
