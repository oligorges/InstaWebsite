<template>
    <div>
        Config AA
        <div class="tablerow">
            <p class="tablecol big">Key</p>
            <p class="tablecol big">Value</p>
        </div>
        <div class="tablerow" v-for="element in Configuration" :key="element.key"><row :config="config" :setting="element"></row></div>
        
        <button @click="getFB">Gen Token</button>
    </div>
</template>

<script>
    import row from '@/components/configform.vue'
    import axios from 'axios'

    export default {
        name: 'configaa',
        components: {
            row
        },
        props:{ 
            config: Array
        },
        data:   function () {
            return {
                Configuration: []
            }
        },
        created: function(){
            this.loadData()
        },
        methods: {
            loadData() {
                axios.get('/config').then(config => {
                    this.Configuration = config.data
                }).catch(()=>{
                    alert('Cant load Configuration')
                })
            },
            getFB(){
                axios.get('/auth/facebook').then(config => {
                    alert("FB Login")
                }).catch(()=>{
                    alert('Cant load Configuration')
                })
            }
            
        }
    }
</script>
<style>
</style>
    