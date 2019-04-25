<template>
    <div>
        <div @click="scroll" id="home"><front :config="config"></front></div>
        <div id="content">
            <topics :config="config"></topics>
            <vuefooter :config="config"></vuefooter>
        </div>
    </div>
</template>
<script> 

    import Front from '@/views/Frontpage.vue'
    import Topics from '@/views/Groups.vue'
    import vuefooter from '@/components/footer.vue'

    export default {
        name: 'content',
        components: {
            Front,
            Topics,
            vuefooter
        },
        props:{ 
            config: Array
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
        