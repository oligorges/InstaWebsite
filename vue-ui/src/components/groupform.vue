<template>
        <div class="imagefiled">
            
            <form>
                <img class="tablecol" :src="element.Image" height="50px">
                <input class="tablecol" type="text" name="Image" placeholder="Preview Image" :value="element.Image">
                <input class="tablecol" type="text" name="Name" placeholder="Name" :value="element.Name">
                <input class="tablecol" type="text" name="Tag" placeholder="Tag" :value="element.Tag">
            </form>
            
        </div>
    </template>
    
    <script>
    export default {
        name: 'imageform',
        props: {
            element: Object
    
        },
        methods:{
            update: ()=>{

            }
        }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    
    </style>
    