<template>
  <div class="p-3">
    <div class="container">
      <b-nav class="d-flex justify-content-between px-5">
        <b-nav-text>
          <font-awesome-icon icon="fa-regular fa-copyright"> </font-awesome-icon>
          Fudge, 2022
        </b-nav-text>
        <b-nav-item>
          <router-link to="/imprint" class="link">
            Impressum
          </router-link>
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { BNavItem } from 'bootstrap-vue-3'
export default {
  name: 'Footer',
  components: { BNavItem }
}
</script>

<style scoped>
  * {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #555B6E;
    background: #DFE1E7;
  }
  .link {
    text-decoration: none;
  }
  .link:hover {
    color: #2f323d;
  }
</style>
