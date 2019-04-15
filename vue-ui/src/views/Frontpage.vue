<template>
  <div class="home">
      <img alt="Vue logo" id="index" src="https://i.kinja-img.com/gawker-media/image/upload/s--kHrQ8nr7--/c_scale,f_auto,fl_progressive,q_80,w_800/18huxz4bvnfjbjpg.jpg" />
      
      
  </div>
</template>

<script>

export default {
  name: 'frontpage',
  components: {
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
