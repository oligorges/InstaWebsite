<template>
  <div class="home">
      <img alt="Vue logo" id="index" :src="getValue('TitleImage')" />
      <div id="welcome">
        <img id="logo" :src="getValue('Logo')"/>
        <p id="Intro">{{getValue('Intro')}}</p>
      </div>
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
#welcome{
  z-index: 2;
  height: 70vh;
  width: 70vw;
  top: 0px;
  left: 0px;
  padding: 15vh 15vw 15vh 15vw;
  font-size: 2rem;
  color: aqua;
  position: absolute;
  align-content: center;
}

</style>
