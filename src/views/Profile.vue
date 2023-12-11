<template>
    <div class="profile">
            <div class="alert alert-success">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, numquam esse? Illo pariatur iste, tempore placeat sunt qui dignissimos necessitatibus sint atque itaque est nisi labore deserunt nesciunt ullam voluptate!
            </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
name: 'Profile',

data () {
    return {
        username: ''
    }
},
mounted () {
    axios
      .get('auth/users/me/')
         .then(res => {
             console.log(res.data)
                        
            })
            .catch(error => {
             console.log(error.response.data)
             })
}

}

</script>