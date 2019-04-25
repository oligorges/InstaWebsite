<template>
        <div class="">
            
            <form action="post">
                <img class="tablecol" :src="element.Image" height="50px">
                <input class="tablecol" @change="changed" type="text" name="image" placeholder="Preview Image" v-model="element.Image">
                <input class="tablecol" @change="changed" type="text" placeholder="Name" v-model="element.Name"/>
                <input class="tablecol" @change="changed" type="text" name="tag" placeholder="Tag" v-model="element.Tag">
                <input class="tablecol" @change="changed" type="checkbox" name="display" v-model="element.Displayed" >
            </form>
            <button @click="update" class="tablecol">Save</button>
        </div>
    </template>
    
    <script>
        import axios from 'axios'

        export default {
            name: 'groupform',
            props: {
                element: Object,
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
                        if(this.element._id){
                            axios.patch('/topic/'+this.element._id, this.element).then(data=>{
                                console.log(data)
                                
                            })
                        }else{
                            axios.post('/topic', this.element).then(data=>{
                                console.log(data)
                                
                            })
                        }
                    }
                },
                changed(){
                    console.log(this.element)
                    this.send = true
                }
            }
        }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    
    </style>
    