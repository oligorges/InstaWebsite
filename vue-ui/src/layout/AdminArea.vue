<template>
    <div>
        
        <div id="nav">
            <router-link class="navLink" to="/aa/config">Configuration</router-link>
            <router-link class="navLink" to="/aa/image">Images</router-link>
            <router-link class="navLink" to="/aa/group">Groups</router-link>
            <button id="logout" @click="logout">Logout</button>
        </div>
        <div id="settings">
            <router-view></router-view>
        </div>

    </div>
</template>
    
    <script>
        
        import axios from 'axios';
        export default {
            name: 'adminarea',
            components: {
            },
            created: function (){
                axios.get('/aa/login').then(res => {
                    console.log(res)
                    if(res.status != 200){
                        this.$router.push('/login')
                    } 
                    this.$router.push('/aa/config')
                }).catch(()=>{
                    this.$router.push('/login')
                })
            },
            methods: {
                logout: function(){
                    axios.get('/aa/logout').then(res => {
                        this.$router.push('/')
                    }).catch(()=>{
                        alert('Failed to Logout')
                    })
                }
            }
        }
    </script>
    
    <style>
    .navLink{
        margin: 0px 15px 0px 15px;
        text-decoration: none;
        color: black;
    }
    #logout{
        position: absolute;
        top: 15px;
        right: 15px;
        height: 30px;
    }
    #nav{
        width: 100vw;
        height: 20px;
        padding: 20px 0px 20px 0px;
        border-right: solid 1px;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: white;
        border-bottom: 1px, solid,gray;
    }
    #settings{
        align-items: center;
    }

    
    input[type=text], input[type=number], input[type=password], select {
        padding: 15px;
        display: inline-block;
        border: none;
        background: #f1f1f1;
    }

    input[type=text]:focus, input[type=password]:focus, input[type=number]:focus {
        background-color: #ddd;
        outline: none;
    }
    .tablecol{
            width: 15vw;
            float: left;
    }
    .tablecol .big{
        font-weight: bold;
    }
    .tablerow{
        width: 100vw;
        height: 100px;
        align-content: center;
    }
    </style>
    