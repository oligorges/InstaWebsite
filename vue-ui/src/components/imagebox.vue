<template>
    <div class="imagebox">
            <img class="image" alt="Not Found" height="300px" src="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg">
            <p class="overlay">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'imagebox',
    props: {
        img: String,
        tag: String,
        text: String,

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
    height: 100%; 
    width: 100%;
    position: absolute;
    margin: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .3s ease;
    background-color:black;
}
.imagebox:hover .overlay {
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
