<template>
  <ul class="mt-3">
    <TodoItem
      v-for="(todo, index) in props.todoList"
      :todo="todo"
      :index="index"
      :key="todo.id"
      @deleteItem="deleteItem"
      @changeTodoDone="changeTodoDone"
    />
  </ul>
</template>

<script lang="ts" setup>
import TodoItem from './TodoItem.vue'
import { ITodoItem } from '../types'
import { defineEmits, defineProps } from 'vue'

const emits = defineEmits(['deleteItem', 'changeTodoDone'])

const props = defineProps<{
  todoList: ITodoItem[]
}>()

const deleteItem = (index: number) => {
  emits('deleteItem', index)
}

const changeTodoDone = (id: number, isDone: boolean) => {
  emits('changeTodoDone', id, isDone)
}
</script>
