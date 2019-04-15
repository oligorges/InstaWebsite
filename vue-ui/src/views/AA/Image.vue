<template>
    
    <div >
        <h1>ImageAA</h1>
        <table>
            <tr>
                <th>Link</th>
                <th>Name</th>
                <th>Group</th>
                <th>Display</th>
            </tr>
            <tr v-for="element in getImages()" :key="element.name"><row  :element="element"></row></tr>
        </table>
    </div>
</template>

<script>
    import row from '@/components/imageform.vue'
    export default {
        name: 'imageaa',
        components: {
            row
        },
        methods:{
            getImages: () => {
                return [
                    { link: 'Cat1', name: 'Cat1', groups: ['General', 'Cats', 'Dogs'], display: false },
                    { link: 'Cat2', name: 'Cat2', groups: ['General', 'Cats', 'Dogs'], display: false },
                    { link: 'Cat3', name: 'Cat3', groups: ['General', 'Cats', 'Dogs'], display: false }
                ]
            }
        }
    }
</script>
<style>

</style>
