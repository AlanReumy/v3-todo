<template>
  <div class="inputHeader">
    <input type="text" v-model="newTodo" />
    <button @click="addNewTodo">添加</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits(["addNewTodo"]);

const newTodo = ref("");

const addNewTodo = () => {
  emit("addNewTodo", newTodo.value);
  newTodo.value = "";
};
</script>
