<template>
  <div class="home">
      <img alt="Vue logo" id="index" :src="getValue('TitleImage')" />
  </div>
</template>

<script>

export default {
  name: 'frontpage',
  components: {
  },
  props:{ 
      config: Array
  },
  methods:{
    getValue(key){
      console.log(key, this.config)
      return (this.config.find((e) => {return e.Key === key})).Value
    }
  }
}
</script>

<style>
.home{
  background-color: antiquewhite;
}
#index{
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  z-index: 1;
  position: absolute;
  top: 0px;
  left: 0px;
}
#index-overlay{
  z-index: 2;
  padding-top: 30vh;
  font-size: 2rem;
  color: aqua;
  position: relative;
  align-content: center;
}

</style>
