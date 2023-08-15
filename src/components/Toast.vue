<template>
<div class="toastContainer">
    <div class="icon">
      <font-awesome-icon icon="circle-check"></font-awesome-icon>
    </div>
    <div class="text">
      '{{ text }}' was successfully!
    </div>
    <div class="icon close-icon">
      <font-awesome-icon icon="xmark"></font-awesome-icon>
    </div>
</div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Toast',
  props: {
    text: String,
  },
  mounted() {
    console.log(this.text)
  }
}
</script>

<style scoped>
.toastContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #BEE3DB;
  width: 350px;
  border-radius: 10px;
  padding: 15px;
}


.text {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #555B6E;
}

.icon {
  color: #555B6E;
  font-size: 26px;
}

.close-icon {
  font-size: 20px;
}

.close-icon:hover {
  color: #2f323d;
  cursor: pointer ;
}


</style>
