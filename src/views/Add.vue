<template>
    <div class="Add">
      <h1 class="text-center mb-3">Add</h1>
      <form @submit.prevent="doAdd">
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
        <button class="btn btn-primary">Add Article</button>
      </form>
      
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Add',
    data () {
      let articles = localStorage.getItem("articles")
      articles = JSON.parse(articles)
      return {
        articles: articles,
        title: "",
        description: "",
        content: '',
      }
    },
    methods: {
        doAdd() {
            let article = {
                title: this.title,
                description: this.description,
                content: this.content,
                slug: this.title.replaceAll(' ',"-").toLowerCase(),
            }
            this.articles.push(article)
            let database = JSON.stringify(this.articles)
            localStorage.setItem('articles', database)
            this.$router.push(`/article/${article.slug}`)
        }
    }
    
  }
  </script>
  