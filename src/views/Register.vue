<template>
    <div class="register">
        <div class="row">
            <div class="col-lg-4 mx-auto border shadow  rounded p-4 mt-3">
                <h1 class="text-center mt-3 mb-4">Register</h1>
                <form @submit.prevent="doregister">
                    <div class="mb-3 form-group">
                        <label for="usernameInput" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="usernameInput" aria-describedby="emailHelp"
                            v-model="username" :class="{
                                'is-invalid': usernameE === true,
                                'is-valid': usernameE === false
                            }">
                        <div class="invalid-feedback" v-if="usernameE">
                            {{ usernameEM }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">Password</label>
                        <input type="password" class="form-control" id="passwordInput" v-model="password" :class="{
                            'is-invalid': passwordE === true,
                            'is-valid': passwordE === false

                        }">
                        <div class="invalid-feedback" v-if="passwordE">
                            {{ passwordEM }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput2" class="form-label">Repeat Password</label>
                        <input type="password" class="form-control" id="passwordInput2" v-model="password2" :class="{
                            'is-invalid': password2E === true,
                            'is-valid': password2E === false

                        }">
                        <div class="invalid-feedback" v-if="password2E">
                            {{ password2EM }}
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">register</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'register',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            usernameE: null,
            passwordE: null,
            passwordEM: null,
            password2E: null,
            password2EM: null,
            usernameEM: null,
        }
    },
    methods: {
        doregister() {
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

            if (this.password.length < 8) {
                this.passwordE = true
                access = false
                if (this.password.length === 0) {
                    this.passwordEM = 'Password empty'
                } else {
                    this.passwordEM = 'Password must be 8 characters'
                }
            } else {
                this.passwordE = false
                this.passwordEM = ''
            }

            //password repeat
            if (this.password2.length < 8) {
                this.password2E = true
                access = false
                if (this.password2.length === 0) {
                    this.password2EM = 'Repeat Password empty'
                } else {
                    this.password2EM = 'Repeat Password must be 8 characters'
                }
            } else {
                this.password2E = false
                this.password2EM = ''
            }
            if (this.password2 != this.password) {
                access = false
                this.password2E = true
                this.passwordE = true
                this.passwordEM = "Password are't isMemoSame."
                
            }else {
                   if (!this.passwordE && !this.password2E) {
                    this.password2EM = ''
                   }
                }
           

            if (access) {
                axios
                    .post('/auth/users/' , {
                        username: this.username,
                        password: this.password
                    })
                    .then(response => {
                        console.log(response)
                        this.$router.push('./login')
                    })
                    .catch(error => {
                        console.log(error.response.data)
                        if(error.response.data.username) {
                            this.usernameE = true
                            this.usernameEM = error.response.data.username.join(" ")
                        }else if(error.response.data.password) {
                            this.passwordE = true
                            this.password2E = true
                            this.passwordEM = error.response.data.password.join(" ")
                        }
                      
                    })
                
                



                // this.$store.commit("login", `${this.username}:${this.password}`)
                // this.$router.push('./profile')
            }
        }
    }
}
</script>