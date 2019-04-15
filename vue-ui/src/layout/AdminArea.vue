<template>
    <div>
        <h1>AdminArea</h1>
        <div id="nav">
            <router-link to="/aa/config">Configuration  </router-link>
            <router-link to="/aa/image">Images  </router-link>
            <router-link to="/aa/group">Groups  </router-link>
        </div>

        <div id="settings">
            <router-view></router-view>
        </div>

    </div>
</template>
    
    <script>
        
        export default {
            name: 'adminarea',
            components: {
            },
            methods: {
                
            }
        }
    </script>
    
    <style>
    
    #nav{
        width: 100vw;
        height: 20px;
        padding: 20px 0px 20px 0px;
        border-right: solid 1px;
        background: lightgray;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    </style>
    