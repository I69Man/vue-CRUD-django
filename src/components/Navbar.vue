<template>
 <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">cupcod.ir</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link  class="nav-link" to="/">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'profile'}" v-if="$store.state.isAuthenticated">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'add'}" v-if="$store.state.isAuthenticated">Write an article</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" v-if="!$store.state.isAuthenticated">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register" v-if="!$store.state.isAuthenticated">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/logout" v-if="$store.state.isAuthenticated">Logout</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {}
}
</script>


<style scoped>
.navbar-brand{
  color: #fff;
}

nav a {
  font-weight: bold;
  color: #747874;
}

nav a.router-link-exact-active {
  color: #fff;
  border-bottom: 1px solid #fff;
}
</style>
