<template>
  <div class="Detail">
    <h1 class="text-center mb-3">Detail</h1>
  <div v-if="!articleNotFound">
    <article>
      <h3>{{ article.title }}</h3>
      <div>{{ article.content }}</div>
    </article>
    <div v-if="$store.state.isAuthenticated">
      <hr class="my-4">
      <button class="btn btn-warning me-2" @click="edit=!edit">Edit</button>
      <button class="btn btn-danger" @click="doRemove">Remove</button>
    </div>

    
    <form @submit.prevent="doEdit" class="pb-5" v-if="edit">
        <hr class="my-5 text-primary ">
        <div class="form-group">
            <div class="mb-3">
                <label for="TitleInput" class="form-label">Title</label>
                <input type="text" class="form-control" id="TitleInput" v-model="title">
            </div>
            <div class="mb-3">
                <label for="DescriptionInput" class="form-label">Description</label>
                <textarea class="form-control" id="DescriptionInput" rows="3" v-model="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="ContentInput" class="form-label">Content</label>
                <textarea class="form-control" id="ContentInput" rows="6" v-model="content"></textarea>
            </div>
        </div>
        <button class="btn btn-secondary">Edit Article</button>
      </form>
  </div>
  <div v-else class="alert alert-warning">
      Article Not Found
  </div>
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  name: 'Detail',
  data() {
      return {
      articleNotFound: false,
      article: {},
      // title: article.title,
      // description: article.description,
      // content: article.content,
      // edit: false
    }
  },
  mounted() {
    axios
      .get(`/article/${this.$route.params.slug}/`)
         .then(res => {
             this.article = res.data
                        
            }).catch(e => {
              this.articleNotFound = true
            })
  },
  methods: {
    // doEdit() {
    //   let index = this.articles.findIndex(
    //     article => article.slug == this.$route.params.slug
    //   )
    //   this.articles[index] = {
    //     title: this.title,
    //     description: this.description,
    //     content: this.content,
    //     slug: this.title.replaceAll(' ',"-").toLowerCase(),
    //   }
    //   let database = JSON.stringify(this.articles)
    //         localStorage.setItem('articles', database)
    //         this.article = this.articles[index]
    //         this.edit = false
    //         this.$router.push(`/article/${this.articles[index].slug}`)
    // },
    // doRemove() {
    //   let index = this.articles.findIndex(
    //     article => article.slug == this.$route.params.slug
    //   )
    //   this.articles.splice(index, 1)
    //   let database = JSON.stringify(this.articles)
    //       localStorage.setItem('articles', database)
    //       this.$router.push('/')

    // }
  }

}
</script>