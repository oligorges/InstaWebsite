<template>
        <div class="imagefiled">
            
            <form>
                <img :src="element.Image" height="50px">
                <td><input type="text" name="Image" placeholder="Preview Image" :value="element.Image"></td>
                <td><input type="text" name="Name" placeholder="Name" :value="element.Name"></td>
                <td><input type="text" name="Tag" placeholder="Tag" :value="element.Tag"></td>
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
    