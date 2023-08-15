<template>
  <div class="container py-4">
    <div v-if="!loading && posts.length > 0">
      <div :key="post.id" v-for="post in posts">
        <div class="pb-2">
          <Post :post="post" :color="color"
                @upVote="() => $emit('upVote',  post.id)"
                @downVote="() => $emit('downVote',  post.id)"
                @deletePost="() => $emit('deletePost', post.id)"
                @editPost="(edittedPost) => $emit('editPost', edittedPost)"
          />
        </div>
      </div>
    </div>
    <div v-if="!loading && posts.length === 0">
      <div class="no-data">
        <font-awesome-icon icon="pencil" class="pencil pb-4"></font-awesome-icon>
        <div class="title py-2">No posts available.</div>
        <div class="message py-2">Be the first to write a new post!</div>
      </div>
    </div>
    <div v-if="loading">
      Loading ...
    </div>
  </div>
</template>

<script>
// todo: loading
import Post from '@/components/Post'
export default {
  /* eslint-disable */
  name: 'Posts',
  props: {
    posts: Array,
    loading: Boolean,
    color: String,
  },
  components: { Post },
  emits: ['upVote, downVote', 'deletePost', 'editPost'],
}
</script>

<style>
.no-data {
  color: #555B6E;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px dotted #adb5bd;
}


.pencil {
  color: #555B6E;
  font-size: 26px;
}
.title {
  font-weight: bold;
  font-size: 24px;
}


</style>
