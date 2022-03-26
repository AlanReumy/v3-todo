<template>
  <li class="mb-2 d-flex justify-content-between h-50">
    <div>
      <input
        class="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        :checked="props.todo.done"
        @change="changeTodoDone"
      />
      <span
        class="ms-3"
        :class="{ 'text-decoration-line-through': props.todo.done }"
        >{{ props.todo.name }}</span
      >
    </div>
    <div>
      <button type="button" class="btn btn-danger btn-sm" @click="deleteItem">
        删除
      </button>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { ITodoItem } from '../types'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  todo: ITodoItem
  index: number
}>()

const emits = defineEmits(['deleteItem', 'changeTodoDone'])

const deleteItem = () => {
  emits('deleteItem', props.index)
}

const changeTodoDone = () => {
  emits('changeTodoDone', props.todo.id, !props.todo.done)
}
</script>

<style>
.todoItem:hover {
  background-color: #f9fafa;
}
</style>
