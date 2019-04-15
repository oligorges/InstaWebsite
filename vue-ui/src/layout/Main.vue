<template>
    <div>
        <div @click="scroll" id="home"><front ></front></div>
        <div id="content">
            <topics></topics>
        </div>
    </div>
</template>
<script> 

    import Front from '@/views/Frontpage.vue'
    import Topics from '@/views/Groups.vue'

    export default {
        name: 'content',
        components: {
            Front,
            Topics
        },
        methods: {
            scroll: ()=>{
                document.getElementById('content').scrollIntoView()
            }
        }
    }
</script>
        
<style>
    #home{
        height: 100vh;
        width: 100vw;
    }
    #content{
        height: 100vh;
        width: 100vw;
        position: absolute;
    }
    
</style>
        