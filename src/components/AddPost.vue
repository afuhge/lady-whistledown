<template>
<div class="container py-4 my-4">
  <div class="add-container">
    <div class="content">
      <textarea
          v-on:keyup.enter="addPost()"
          id="textarea"
          v-model="content"
          @input="countChars(content)"
          placeholder="Enter something..."
      ></textarea>
    </div>
    <div class="footer">
      <div class="badge" :class="[chars > charsLimit ? 'badge-full': '']">
        {{chars}} of {{ charsLimit }} chars
      </div>
      <button class="add-button" :disabled="chars > charsLimit || chars === 0" v-on:click="addPost()">
        <div class="icon">
          <font-awesome-icon icon="plus"></font-awesome-icon>
        </div>
        <div>Add Post</div>
      </button>
    </div>
  </div>
</div>
</template>
<script>

import { BForm, BFormTextarea } from 'bootstrap-vue-3'
export default {
  /* eslint-disable */
  name: 'AddPost',
  components: { BForm, BFormTextarea },
  data() {
    return {
      chars: 0,
      content: '',
      charsLimit: 300,
    }
  },
  methods: {
    addPost() {
      const newPost = {
        date: new Date(),
        content: this.content,
        votes: 0
      }
      this.content = '';
      this.$emit('add-post', newPost)
    },
    countChars(content) {
      this.chars = content.trim().length;
    }
  }
}
</script>

<style scoped>
.add-container {
  background: #DFE1E7;
  border-radius: 10px;
  box-shadow: 0 4px 10px #adb5bd;
  display: grid;
  grid-auto-rows: 200px auto;
}

.content {
  padding: 20px;
  font-size: 15px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 20px 20px;
}

.badge {
  border-radius: 15px;
  background: #555B6E;
  color: #BEE3DB;
  font-family: 'Inter', sans-serif;
}

.badge-full {
  background: #d79593;
  color: #2f323d;
}

.add-button {
  border: none;
  background: #555B6E;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  padding: 8px 14px;
  color: #BEE3DB;
  font-family: 'Inter', sans-serif;
}

.add-button:hover {
  color: #FAF9F9;
}

.icon {
  padding-right: 4px;
}
.add-button[disabled] {
  opacity: 50%;
  cursor: not-allowed;
}

#textarea {
  background: #FAF9F9;
  font-family: 'Playfair Display', sans-serif, serif;
  border: none;
  color: #555B6E;
  height: 180px;
  width: 100%;
  resize: none;
  border-radius: 8px;
  padding: 10px;
}

#textarea:focus-visible {
  outline: unset;
}

#textarea:focus {
  border: 2px solid #555B6E;
}

</style>
