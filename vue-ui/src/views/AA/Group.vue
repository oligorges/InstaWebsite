<template>
    <div >
        <h1>ImageAA</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Tag</th>
            </tr>
            <tr v-for="element in getGroups()" :key="element.name"><row  :name="element.name" :tag="element.tag"></row></tr>
        </table>
    </div>
</template>

<script>
    import row from '@/components/groupform.vue'
    export default {
        name: 'groupaa',
        components: {
            row
        },
        methods:{
            getGroups: () => {
                return [{ name: 'General', tag:'gen'}, { name: 'Cats', tag:'cat'}, { name: 'Dogs', tag:'dog'}]
            }
        }
    }
</script>
<style>

</style>
