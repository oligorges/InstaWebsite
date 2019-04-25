<template>
        <div>
            
            <form action="post">
                <span class="tablecol"> </span>
                <label class="tablecol" for="value">{{setting.Key}}</label>
                <input class="tablecol-2" @change="changed" type="text" name="value" placeholder="Value" v-model="setting.Value">
            </form>
            <button @click="update" class="tablecol">Save</button>
        </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
        name: 'configform',
        props: {
            setting: Object,
            config: Array
        },
        data:   function () {
            return {
                send: false
            }
        },

        methods:{
            update(){
                if(this.send){
                    this.send = false
                    axios.patch('/config/'+this.setting.Key, {Value: this.setting.Value}).then(data=>{
                        console.log(data)
                    })
                }
            },
            changed(){
                this.send = true
            }
        }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    
    </style>
    