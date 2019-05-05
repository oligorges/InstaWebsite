<template>
    <div class="login" :style="getColor()">
        <div class="form">
            <h1>Login</h1>
            <form action="post">
                <label for="username">Username:</label><br />
                <input type="text" name="username" placeholder="Username..." v-model="username"/><br />
                <label for="password">Password:</label><br />
                <input type="password" name="password" placeholder="Password..." v-model="password" /><br />
                <input type="button" value="Submit" v-on:click="login()">
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import encrypt from 'js-sha512'

    export default {
        name: 'login',
        components: {
        },
        props:{ 
            config: Array
        },
        methods: {
            login(){
                const data = {
                    username: this.username,
                    password: this.password //encrypt(this.password)
                }
                axios.post('/aa/login', data).then(res => {
                    
                    this.$router.push('/aa/config')
                }).catch((err)=>{
                    alert(err)
                })
            },
            getColor(){
                return 'background-color:'+(this.config.find((e) => {return e.Key === "Color"})).Value
            }
        }
    }
</script>

<style scoped>
.login{
    background-color: lightblue ;
    width: 100vw;
    height: 100vh;
}
.form{
    padding: 20px;
    background: white;
    border: solid gray 1px;
    border-radius: 7px; 
    display: inline-block;
    margin-top: 15vh;
}
form{
    align-items: flex-start;
}
input[type=button], input[type=submit]{
    padding: 10px 20px 10px 20px;
    border: 1px solid #bbb;
    border-radius: 5px;
}
input[type=text], input[type=number], input[type=password], select {
    width: 70vw;
    min-width: 80px;
    max-width: 300px;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus, input[type=number]:focus {
    background-color: #ddd;
    outline: none;
}
</style>
