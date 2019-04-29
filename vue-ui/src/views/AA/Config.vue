<template>
    <div id="conf">
        <h1>Config</h1>
        <div class="tablerow">
            <span class="tablecol"> </span>
            <p class="tablecol big">Key</p>
            <p class="tablecol big">Value</p>
        </div>
        <div class="tablerow" v-for="element in Configuration" :key="element.key"><row :config="config" :setting="element"></row></div>
        <div class="tablerow">
            <form enctype="multipart/form-data" id="uploadLogo">
                <span class="tablecol"> </span>
                <label class="tablecol" for="image">Upload Logo:</label>
                <div class="tablecol-2">
                        <input  type="file" name="image" >
                </div>
                
            </form>
            <button class="tablecol" @click="sendLogo">Save</button>
        </div>
        <div class="tablerow">
            <span class="tablecol"> </span>
            <button class="tablecol" @click="update">Update Database</button>
            <button class="tablecol" @click="reset">Reset Config</button>
            <button class="tablecol" @click="change">change Instagramm Account</button>
            
        </div>
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
            update(){
                axios.get('/insta/database').then(config => {
                    alert("Update successfull")
                }).catch(()=>{
                    alert('Cant update Database')
                })
            },
            change(){
                axios.get('/insta/auth').then(config => {
                    var win = window.open(config.data.url, '_blank');
                    win.focus();
                }).catch(()=>{
                    alert('change Failed')
                })
            },
            reset(){
                if(confirm('Are you sure that you want reset all Settings? \n !! This will also reset the Login Credentials !!')){
                    axios.delete('/config').then(config => {
                        alert("Reset successfull")
                    }).catch(()=>{
                        alert('Reset Failed')
                    })
                }
                
            },
            sendLogo(){
                var formData = new FormData(document.getElementById('uploadLogo'));
                axios.post('/config/logo', formData ,{ headers: {'Content-Type': 'multipart/form-data' }})
                .then(function (response) {
                    // update view
                    axios.patch('/config/Logo', {Value: 'assets/logo.png'}).then(data=>{
                        console.log(data)
                    })
                })
                .catch(function (response) {
                    console.log(response)
                })
            }
            
        }
    }
</script>
<style>
    #conf{
        display: inline-block;
    }
</style>
    