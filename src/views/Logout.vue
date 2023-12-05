<template>
    <div class="logout">
      <h1>logout</h1>
      <button class="btn btn-danger" @click="doLogout">logout</button>
    </div>
</template>
<script>
export default{
    name: 'Logout',
    methods: {
        doLogout() {
            this.$store.commit('logout')
            this.$router.push('/login')
        }
    }
}
</script>