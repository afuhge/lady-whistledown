<template>
  <Header />
    <div class="notification-container">
      <div v-for="notification in notifications" :key="notification" class="pb-2">
        <Toast :text="notification" />
      </div>
    </div>
  <div>
    <router-view></router-view>
  </div>
  <ScrollTop />
  <Footer />
</template>

<script>
export default {
  name: 'App',
}
</script>

<script setup>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollTop from '@/components/ScrollTop'
import Toast from '@/components/Toast'
import { ref } from 'vue'

let notifications = ref([])

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Meie+Script&family=Playfair+Display&display=swap');

#app {
  font-family: 'Playfair Display', sans-serif,serif;
  font-size: 20px;
  margin: 0;
  padding: 0;
  background: #faf9f9;

}

.notification-container {
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 10;
  height: 100%;
}
</style>
