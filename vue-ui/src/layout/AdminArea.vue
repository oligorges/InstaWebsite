<template>
    <div>
        
        <div id="nav">
            <router-link class="navLink" to="/aa/config">Configuration</router-link>
            <router-link class="navLink" to="/aa/image">Images</router-link>
            <router-link class="navLink" to="/aa/topic">Topics</router-link>
            <div class="navGroup">
                <button class="navButton" @click="logout">Logout</button>
                <button class="navButton" @click="back">Back</button>
            </div>
            
        </div>
        <div id="settings">
            <router-view :config="config"></router-view>
        </div>

    </div>
</template>
    
    <script>
        
        import axios from 'axios';
        export default {
            name: 'adminarea',
            components: {
            },
            props:{ 
                config: Array
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
                logout(){
                    axios.get('/aa/logout').then(res => {
                        this.$router.push('/')
                    }).catch(()=>{
                        alert('Failed to Logout')
                    })
                },
                back(){
                    window.location.href = window.location.origin
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
    .navGroup{
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .navButton{
        height: 30px;
        float: left;
    }

    #nav{
        width: 100vw;
        height: 20px;
        padding: 20px 0px 20px 0px;
        border-right: solid 1px;
        position: relative;
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
        width: 14vw;
        float: left;
        margin-right: 10px;
    }
    .tablecol-2{
        width: 28vw;
        float: left;
        margin-right: 10px;
    }
    .tablecol .big{
        font-weight: bold;
    }
    .tablerow{
        width: 100vw;
        height: 60px;
        align-content: center;
    }
    </style>
    