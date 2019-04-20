<template>
    
    <div >
        <h1>Image AA</h1>
        
        <div class="tablerow">
            <p class="tablecol big"></p>
            <p class="tablecol big">Link</p>
            <p class="tablecol big">Name</p>
            <p class="tablecol big">IG ID</p>
            <p class="tablecol big">Topic</p>
            <p class="tablecol big">Display</p>
        </div>
        <div class="tablerow" v-for="(element, index) in Images" :key="element.Name"><row  :element="element" :topics="Topics" :index="index"></row></div>
        
    </div>
</template>

<script>
    import row from '@/components/imageform.vue'
    import axios from 'axios'

    export default {
        name: 'imageaa',
        data:   function () {
            return {
                Images: [],
                Topics: []
            }
        },
        components: {
            row
        },
        created: function(){
            this.loadData()
        },
        methods: {
            loadData() {
                axios.get('/image').then(img => {
                    this.Images = img.data
                }).catch(()=>{
                    alert('Cant load Data')
                })
                axios.get('/topic').then(top => {
                    this.Topics = top.data
                }).catch(()=>{
                    alert('Cant load Topics')
                })
                
            }
        }
    }
</script>
<style>
    

</style>
