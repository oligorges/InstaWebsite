<template>
    <div >
        <h1>Topic AA</h1>
        <button @click="add">Add Topic</button>
        <div class="tablerow">
            <p class="tablecol">Link</p>
            <p class="tablecol">Name</p>
            <p class="tablecol">Tag</p>
            <p class="tablecol">Displayed</p>
        </div>
        <div class="tablerow" v-for="element in Topics" :key="element.Name"><row  :element="element"></row></div>
    </div>
</template>

<script>
    import row from '@/components/groupform.vue'
    import axios from 'axios'

    export default {
        name: 'groupaa',
        components: {
            row
        },
        data:   function () {
            return {
                Topics: []
            }
        },
        created: function(){
            this.loadData()
        },
        methods: {
            loadData() {
                axios.get('/topic').then(top => {
                    this.Topics = top.data
                }).catch(()=>{
                    alert('Cant load Topics')
                })
            },
            add(){
                this.Topics.push({
                    Name: '',
                    Tag: '',
                    Image: '',
                    Displayed: false
                })
            }
        }
    }
</script>
<style>

</style>
