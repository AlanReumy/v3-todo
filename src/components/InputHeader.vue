<template>
  <div class="inputHeader d-flex justify-content-between">
    <div class="flex-grow-1">
      <input
        type="text"
        class="form-control me-3 newTodoInput"
        v-model="newTodo"
      />
    </div>
    <div class="ms-3">
      <button type="submit" class="btn btn-primary btn-sm" @click="addNewTodo">
        添加
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['addNewTodo'])

const newTodo = ref('')

const addNewTodo = () => {
  emit('addNewTodo', newTodo.value)
  newTodo.value = ''
}
</script>

<style>
.inputHeader {
  display: flex;
}
.newTodoInput {
  height: 90%;
}
</style>
