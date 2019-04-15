<template>
        <div class="imagefiled">
            
            <form>
                <td><input type="text" name="name" placeholder="Name" :value="name"></td>
                <td><input type="text" name="tag" placeholder="Tag" :value="tag"></td>
            </form>
            
        </div>
    </template>
    
    <script>
    export default {
        name: 'imagebox',
        props: {
            name: String,
            tag: String
    
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
    