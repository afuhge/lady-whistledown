<template>
  <div class="py-4 my-4">
    <AddPost @add-post="addPost" />
  </div>
  <div v-if="!loading && topPosts.length > 0" class="top-posts py-4">
    <TopPosts :topPosts="topPosts"
              @downVote="(id) => voteOnPost(id, 'down')"
              @upVote="(id) => voteOnPost(id, 'up')"
              @deletePost="(id) => deletePost(id)"
              @editPost="editPost"/>
  </div>
  <div class="py-4">
    <Posts :posts="posts" :loading=loading :color="color"
           @downVote="(id) => voteOnPost(id, 'down')"
           @upVote="(id) => voteOnPost(id, 'up')"
           @deletePost="(id) => deletePost(id)"
           @editPost="editPost"
/>
  </div>
</template>

<script>

import AddPost from '@/components/AddPost'
import Posts from '@/components/Posts'
import TopPosts from '@/components/TopPosts'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    TopPosts,
    AddPost,
    Posts,
  },
  data() {
    return {
      posts: [],
      topPosts: [],
      loading: true,
      color: '#adb5bd',
    }
  },
  methods: {
    async deletePost(id) {
      const res = await fetch(`api/posts/${id}`, {
        method: 'DELETE',
      })
      res.status === 200 ? this.posts = this.posts.filter((task) => task.id !== id) : alert('Error deleting task')
      await this.filterTopThree();
    },

    async editPost(post){
      const res = await fetch(`api/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(post)
      })
      const data = await res.json()
      this.posts = this.posts.map((p => post.id === p.id ? {...p, votes: data.votes, content: data.content}: p))
      await this.filterTopThree();
    },

    async addPost(newPost) {
      const res = await fetch('api/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newPost)
      })
      const data = await res.json()
      this.posts = [data, ...this.posts];
    },

    async fetchPosts() {
      const res = await fetch('api/posts')
      const data = await res.json()
      return data
    },

    async fetchPost(id) {
      const res = await fetch(`api/posts/${id}`)
      const data = await res.json()
      return data
    },

    async voteOnPost(id, type) {
      const post =  await this.fetchPost(id)
      if (type === 'up') {
        post.votes += 1;

      } else if (type === 'down') {
        post.votes -= 1;
      }
      await this.editPost(post)
      await this.filterTopThree();
    },

    async filterTopThree() {
     const hotPosts = this.posts.filter((a) => a.votes > 10);
     hotPosts.sort((a, b)  => b.votes - a.votes);
     this.topPosts = hotPosts.length > 3 ? hotPosts.splice(0,3) : hotPosts;
    },

  },
  async created() {
    this.posts = await this.fetchPosts()
    this.posts.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    this.loading = false;
    await this.filterTopThree();
  }
}

</script>

<style scoped>
.top-posts {
  background: #555B6E;
}

</style>
