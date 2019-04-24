<template>
    <div class="imagebox">
            <img class="image" alt="Not Found" height="300px" :src="img">
            <div v-if="group" id="group">
                <p class="overlay">{{ text }}</p>
            </div>
            <div v-else id="img">
                <p class="overlay">{{ text }}</p>
            </div>
    </div>
</template>

<script>
export default {
    name: 'imagebox',
    props: {
        img: String,
        tag: String,
        text: String,
        config: Array,
        group: Boolean
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.imagebox{
    height: 300px;
    width: fit-content;
    position: relative;
    float: left;
    margin: 5px;
}
.image{
    z-index: 1;
    position: relative;
    max-width: calc(100vw - 10px);
}
.overlay{
    z-index: 10;
    position: absolute;
    margin: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: .3s ease;
    padding-top: 30%;
    font-size: larger;
}

#img .overlay {
    opacity: 0.3;
    background-color:white;
    color: black;
}

#group .overlay {
    opacity: 0;
    background-color:black;
    color: white;
}

.imagebox:hover #img .overlay {
  opacity: 0;
}
.imagebox:hover #group .overlay {
  opacity: 0.7;
}
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
