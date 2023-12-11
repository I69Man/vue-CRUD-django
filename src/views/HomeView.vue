<template>
  <div class="home">
    <h1 class="text-center mb-3">Home</h1>
    <article v-if="articles.length" v-for="article in articles">
        <h3><router-link :to="`/article/${article.slug}`">{{ article.title }}</router-link></h3>
        <div>{{ article.description }} <router-link :to="`/article/${article.slug}`">+ more</router-link></div>
        <hr>
    </article>
    <div v-if="!articles.length" class="alert alert-warning">
      there is not post.
    </div>
   
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  data () {
    return {
      articles: ''
    }
  },
  mounted() {
    axios
      .get('/article/')
         .then(res => {
             this.articles = res.data
                        
            })
           
  }
  
}
</script>
