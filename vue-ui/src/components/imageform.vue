<template>
        <div :tabindex="index" class="imagefield">
            
            <form action="post">
                <img class="tablecol" :src="element.Thumb" height="50px" name="Thumb">
                <input @change="changed" class="tablecol" type="text" name="Link" placeholder="Imagelink" v-model="element.Link">
                <input @change="changed" class="tablecol" type="text" name="Name" placeholder="Name" v-model="element.Name">
                <input @change="changed" class="tablecol" type="text" name="Igid" placeholder="Instagramm ID" v-model="element.Igid">
                <select @change="changed" class="tablecol" name="group" v-model="element.Topic">
                    <option v-for="item in Topics" :key="item.Name" :value="item.Tag" >{{item.Name}}</option>
                </select>
                <input @change="changed" class="tablecol" type="checkbox" name="display" v-model="element.Displayed" >
            </form>
            <button @click="update" class="tablecol">Save</button>
        </div>
    </template>
    
    <script>
    import axios from 'axios'

    export default {
        name: 'imageform',
        props: {
            element: Object,
            Topics: [Object],
            index: Number,
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
                    axios.patch('/image/'+this.element._id, this.element).then(data=>{
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
    