<template>
    <div class='container'>
      
       Login
        <form @submit.prevent="login()">
            <label for='username'>Username</label>
            <input type="text" placeholder='username' v-model='username' required>
            <label for='password'>Password</label>
            <input type="password" placeholder='password' v-model='password' required>
            <button type='submit'>Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'users',
    data () {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        login() {
         
            if (this.username && this.password) {
            console.log(this.username, this.password);
            axios.post("https://testapi.com/post", {
                body: {username: this.username, password: this.password}
            }).then(res => {
                console.log(res)
            }).catch(e => {
                console.log(e)
            })
        }
    }
    }
}

</script>