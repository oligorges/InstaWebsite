<template>
        <div>
            
            <form>
                <input name="_id" :value="setting._id" hidden>
                <td><input type="text" name="key" placeholder="Key" :value="setting.key"></td>
                <td><input type="text" name="value" placeholder="Value" :value="setting.value"></td>
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
    