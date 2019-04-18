<template>
        <div class="overlay"  :hidden="hidden">
                <img class="image" alt="Not Found" :src="image">
        </div>
    </template>
    
    <script>
    export default {
        name: 'overlay',
        props: {
            image: String,
            hidden: Boolean
    
        }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
        .image{
            padding: 10vw;
            z-index: 15;
            max-width: 90vw;
            max-height: 90vh;
        }

        .overlay{
            width: 100vw;
            height: 100vh;
            background-color: rgba(0,0,0,0.5);
            
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 10;
        }
    </style>
    