<template>
<div class="container mt-4">
  <div class="headline-container">
    <div class="icon">
      <font-awesome-icon icon="fire"></font-awesome-icon>
    </div>
    <div class="">
      Trending Posts
    </div>
  </div>
  <div class="post-container mt-4">
    <div :key="topPost.id" v-for="topPost in topPosts" class="py-2">
      <div>
        <Post :post="topPost" :color="color"
              @upVote="() => $emit('upVote',  topPost.id)"
              @downVote="() => $emit('downVote',  topPost.id)"
              @deletePost="() => $emit('deletePost', topPost.id)"
              @editPost="(edittedPost) => $emit('editPost', edittedPost)"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Post from '@/components/Post'
export default {
  name: 'TopPosts',
  components: { Post },
  props: {
    topPosts: Array,
  },
  data() {
    return {
      color: '#30363b',
    }
  },
  emits: ['upVote, downVote', 'deletePost', 'editPost'],
}
</script>

<style scoped>
.headline-container {
 display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  font-size: 24px;
  color: #faf9f9;
  font-family: 'Inter', sans-serif;
  letter-spacing: 4px;
  font-weight: 600;
}

.icon {
  text-align: right;
}

.post-container {
  border-radius: 10px;
  padding: 10px 0 0 0;
}

</style>
