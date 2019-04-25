<template>
        <div id="footer">

           <a :href="getValue('IGLink')">
               <span>My Instagram</span>
            </a> 
           
        </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
        name: 'vuefooter',
        props: {
            config: Array
        },
        methods:{
            getValue(key){
            console.log(key, this.config)
            return (this.config.find((e) => {return e.Key === key})).Value
            }
        }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
        #footer{
            width: 100vw;
            height: 50px;
            align-content: center;
            background-color: rgb(160, 160, 160);
            position: absolute;
            bottom: 0px;
        }
        span{
            text-decoration: none;
            color: #fff;
        }
    </style>
    