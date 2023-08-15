<template>
<div class="top-button" v-on:click="scrollToTop()">
 <font-awesome-icon icon="arrow-up"></font-awesome-icon>
</div>
</template>

<script>
export default {
  name: 'ScrollTop',
  methods: {
    scrollToTop() {
      window.scrollTo(0,0)
    },
  },
}
</script>

<style scoped>
.top-button {
  position: fixed;
  bottom: 20px;
  right: 10px;
  background: #555B6E;
  color: #BEE3DB;
  border: 2px solid #BEE3DB;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  z-index: 20;
}
.top-button:hover {
  color: #FAF9F9;
}
</style>
