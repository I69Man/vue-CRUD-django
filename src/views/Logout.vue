<template>
    <div class="logout">
      <h1>logout</h1>
      <div class="alert alert-danger" v-if="logoutError">
        {{ logoutError }}
      </div>
      <button class="btn btn-danger" @click="doLogout">logout</button>
    </div>
</template>
<script>
import axios from 'axios'


export default{
    name: 'Logout',
    data() {
        return {
            logoutError: ''
        }
    },
    methods: {
        doLogout() {
            axios
                .post('/auth/logout')
                .then(res => {
                        this.$store.commit('logout')
                        this.$router.push('/login')
                        
                    })
                    .catch(error => {
                        console.log(error.response.data)
                        this.logoutError = error.response.data
                    })
        }
    }
}
</script>