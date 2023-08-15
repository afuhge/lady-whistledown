<template>
  <div>
    <div class="post" v-bind:style="color ? `box-shadow: 0 4px 10px ${color}`: 'box-shadow: 0 4px 10px #adb5bd'">
     <div class="votes-container" :class="[post.votes > topPost ? 'top-banner' : 'banner']">
       <div class="icon" @click="this.$emit('upVote')"><font-awesome-icon icon="caret-up"></font-awesome-icon></div>
       <div class="votes">{{ post.votes }}</div>
       <div class="icon" @click="this.$emit('downVote')"><font-awesome-icon icon="caret-down"></font-awesome-icon></div>
     </div>
      <div class="content-container" :class="[post.votes > topPost ? 'top-post' : '']">
        <div class="menu-container">
          <div class="date">{{ format(new Date(post.date), 'eeee, MM/dd/yyyy hh:mma') }}</div>
          <div class="menu">
            <b-dropdown size="lg"  variant="link" no-caret>
              <template #button-content>
                <font-awesome-icon icon="ellipsis-vertical" class="menu-icon"></font-awesome-icon>
              </template>
              <b-dropdown-item @click="openEditModal">
               <div class="dropdown-links" style="color:#2f323d;">
                 <font-awesome-icon icon="pencil" class="pl-4"></font-awesome-icon>
                 Edit Post
               </div>
              </b-dropdown-item>
              <b-dropdown-item @click="openDeleteModal">
                <div class="link-danger dropdown-links">
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                 Delete Post
                </div>
              </b-dropdown-item>
            </b-dropdown></div>
        </div>
        <div class="content"> {{ post.content }}</div>
      </div>
    </div>

     <div>
        <b-modal v-model=show title="Delete Post" ref="deleteModal"
                 :cancel-variant="'light'"  no-close-on-backdrop
                 :ok-title="'Delete post'" :ok-variant="'danger'" hide-header-close
                 :header-bg-variant="'danger'" :header-text-variant="'light'"
                v-on:ok="handleOk">
          <b-container fluid>
            <b-row>
              Are you sure to delete this post?
            </b-row>
          </b-container>
        </b-modal>
      </div>
    <div>
      <b-modal v-model=showEdit title="Edit Post"
               :cancel-variant="'light'"  no-close-on-backdrop
               :ok-title="'Save post'"  hide-header-close
               :header-bg-variant="'primary'" :header-text-variant="'light'"
               :ok-disabled="chars > charsLimit"
               v-on:ok="handleEdit">
        <b-container>
          <div class="edit-content">
            <textarea
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
          </div>
        </b-container>
      </b-modal>
    </div>
  </div>
</template>

<script>
// todo: schönere modals
import { format } from 'date-fns'
export default {
  /* eslint-disable */
  name: 'Post',
  props: {
    post: Object,
    color: String,
  },
  data() {
    return {
      format,
      topPost: 10,
      show: false,
      showEdit: false,
      content: this.post.content,
      chars: '',
      charsLimit: 300,
      voteCount: 1,
    }
  },
  methods: {
    countChars(content) {
      this.chars = content.trim().length;
    },
    openDeleteModal() {
     this.show = true
    },

    openEditModal() {
      this.showEdit = true
    },

    handleOk() {
      this.$emit('deletePost');
    },

    handleEdit() {
      const newPost = {
        ...this.post,
        content: this.content,
      }
      console.log(newPost)
      this.$emit('editPost', newPost);
    }
  },
  mounted () {
    this.countChars(this.content);
  },
  emits: ['upVote, downVote', 'deletePost', 'editPost'],
}
</script>

<style scoped>
.post {
  background: #DFE1E7;
  color: #555B6E;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 200px;
  display: grid;
  grid-template-columns: 10% auto;
  box-shadow: 0 4px 10px #adb5bd;
}
.votes-container {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  color: #FAF9F9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  user-select: none;
}
.votes {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
}

.icon:hover {
  color: #BEE3DB;
  cursor: pointer;
}

.content-container {
  padding: 10px 20px;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-post {
  background: #BEE3DB;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.top-banner {
  background: #769896;
}
.banner {
  background: #555B6E;
}

.date {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}

.menu-icon:hover {
  color: #2f323d;
  cursor: pointer;
}
.menu-icon {
  color:  #555B6E;
}

.content {
  padding-top: 26px;
  padding-right: 5px;
  font-size: 16px;
  line-break: anywhere;
}

.dropdown-links {
  font-family: 'Inter', sans-serif;
}

.edit-content {
  padding: 20px;
  font-size: 15px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
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

#textarea {
  background: #FAF9F9;
  font-family: 'Playfair Display', sans-serif, serif;
  border: none;
  color: #555B6E;
  height: 100%;
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
