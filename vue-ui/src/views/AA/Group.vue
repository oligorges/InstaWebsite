<template>
    <div >
        <h1>Topic AA</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Tag</th>
            </tr>
            <tr v-for="element in Topics" :key="element.name"><row  :elemente="element"></row></tr>
        </table>
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
            }
        }
    }
</script>
<style>

</style>
