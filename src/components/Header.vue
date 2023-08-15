<template>
  <div class="sticky-top">
    <b-navbar class="navbar">
      <b-navbar-brand>
        <router-link to="/" class="label">Lady Whistledown</router-link>
      </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item>
            <div class="user">
              <font-awesome-icon icon="user"></font-awesome-icon>
            </div>
          </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Header'
}
</script>

<style scoped>
.navbar {
  font-family: 'Meie Script', sans-serif;
  background: #555B6E;
  box-shadow: 0 4px 10px #555b6e87;
}
.label {
  text-decoration: none;
  color: #FAF9F9;
  font-size: 36px;
}
.label:hover {
  color: #BEE3DB;
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #BEE3DB;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
