<template>
        <div>
            
            <form>
                <input name="_id" :value="setting._id" hidden>
                <input class="tablecol" type="text" name="key" placeholder="Key" :value="setting.Key">
                <input class="tablecol" type="text" name="value" placeholder="Value" :value="setting.Value">
            </form>
            
        </div>
    </template>
    
    <script>
    export default {
        name: 'configform',
        props: {
            setting: Object
    
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
    