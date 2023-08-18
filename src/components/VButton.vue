<script setup>
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  options: {
    type: Object,
    default: {},
  }
});
</script>

<template>
  <div relative w-full h-30px>
    <h3 class="jje-btn jje-btn-bg" :style="options">{{ text }}</h3>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.jje-btn {
  display: inline-block;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s;
}
.jje-btn:hover {
  background-color: #2d74f3;
}

.jje-btn-bg {
  background-color: #005cff;
}
</style>
