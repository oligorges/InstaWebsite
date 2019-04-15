<template>
        <div>
            <router-link to="/topic/cat"><imagebox text="Cats" img="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" /></router-link>
            <router-link to="/topic/dogs"><imagebox text="Dogs" img="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" /></router-link>
            <router-link to="/topic/birds"><imagebox text="Birds"  img="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" /></router-link>
            <router-link to="/topic/stp"><imagebox text="St Petersburg"  img="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" /></router-link>
      
        </div>
      </template>
      
      <script>
      import imagebox from '@/components/imagebox.vue'
      
      export default {
        name: 'groups',
        components: {
          imagebox
        }
      }
      </script>
      <style>
      
      </style>
      