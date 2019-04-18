<template>
        <div class="imagefiled">
            
            <form @blur="update" @focus="save">
                <img class="tablecol" :src="element.Thumb" height="100px" name="Thumb">
                <input @blur="console.log('Byby')" class="tablecol" type="text" name="Link" placeholder="Imagelink" :value="element.Link">
                <input class="tablecol" type="text" name="Name" placeholder="Name" :value="element.Name">
                <input class="tablecol" type="text" name="Igid" placeholder="Instagramm ID" :value="element.Igid">
                <select class="tablecol" name="group" :value="element.Topic">
                    <option v-for="item in Topics" :key="item.Name" :value="item.Name">{{item.Name}}</option>
                </select>
                <input class="tablecol" type="checkbox" name="display" :value="element.Displayed" >
            </form>
            
        </div>
    </template>
    
    <script>
    export default {
        name: 'imagebox',
        props: {
            element: Object,
            Topics: [Object],
        },
        data:   function () {
            return {
                oldElement: null
            }
        },

        methods:{
            update(){
                if(this.oldElement !== this.element){
                    alert('update')
                }
            },
            save(){
                this.oldElement = this.element
            }
        }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    
    </style>
    