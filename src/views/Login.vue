<template>
    <div class="login">
        <div class="row">
            <div class="col-lg-4 mx-auto border shadow  rounded p-4 mt-3">
                <h1 class="text-center mt-3 mb-4">Login</h1>
                <form @submit.prevent="doLogin">
                    <div class="mb-3 form-group">
                        <label for="usernameInput" class="form-label">User Name</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="usernameInput" 
                            aria-describedby="emailHelp"
                            v-model="username"
                            :class="{
                                'is-invalid' : usernameE === true,
                                'is-valid' : usernameE === false
                                }"
                        >
                        <div class="invalid-feedback" v-if="usernameE">
                            {{ usernameEM }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">Password</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="passwordInput" 
                            v-model="password"
                            :class="{
                                'is-invalid' : passwordE === true,
                                'is-valid' : passwordE === false

                                }"
                        >
                        <div class="invalid-feedback" v-if="passwordE">
                            {{ passwordEM }}
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LOgin',
    data() {
        return {
            username: '',
            password: '',
            usernameE: null,
            passwordE: null,
            passwordEM: null,
            usernameEM: null,
        }
    },
    methods: {
        doLogin() {
            let access = true
            if (this.username.length < 5) {
                this.usernameE = true
                access = false
                if (this.username.length === 0) {
                    this.usernameEM = 'username empty'
                } else {
                    this.usernameEM = 'username must be 5 characters'
                }
            } else {
                this.usernameE = false
                this.usernameEM = ''
            }

            if(this.password.length < 6) {
                this.passwordE = true
                access = false
                if (this.password.length === 0) {
                    this.passwordEM = 'Password empty'
                } else {
                    this.passwordEM = 'Password must be 6 characters'
                }
            } else {
                this.passwordE = false
                this.passwordEM = ''
            }
            if(access) {
                this.$store.commit("login", `${this.username}:${this.password}`)
                this.$router.push('./profile')
            }
        }
    }
}
</script>