<template>
    <div id="topic">
        <h1>{{ $route.params.tag }}</h1>
        <div v-for="item in images(cat)" :key="item.text">
            <span v-on:click="big(item.link)">
                <imagebox :text="item.text" :img="item.thumb" />
            </span>
        </div>
    </div>
</template>

<script>
import imagebox from '@/components/imagebox.vue'

export default {
    name: 'images',
    components: {
        imagebox
    },
    methods:{
        big: (link) => {
            alert(link)
        },
        images: (tag) => {
            console.log(tag)
            return [
                { text: 'Cat1', thumb: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg' },
                { text: 'Cat2', thumb: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', link: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg' },
            ]
        }
    }
}
</script>
<style>
#topic{
    align-content: center;
}
</style>
      