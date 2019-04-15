<template>
        <div class="imagefiled">
            
            <form>
                <td><input type="text" name="link" placeholder="Imagelink" :value="element.link"></td>
                <td><input type="text" name="name" placeholder="Name" :value="element.name"></td>
                <td><select name="group">
                    <option v-for="item in element.groups" :key="item" :value="item">{{item}}</option>
                </select></td>
                <td><input type="checkbox" name="display" :value="element.display" ></td>
            </form>
            
        </div>
    </template>
    
    <script>
    export default {
        name: 'imagebox',
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
    