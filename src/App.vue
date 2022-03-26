<template>
  <div class="container mt-3 w-75">
    <InputHeader @addNewTodo="addNewTodo" />
    <TodoList
      :todoList="todoList"
      @deleteItem="deleteItem"
      @changeTodoDone="changeTodoDone"
    ></TodoList>
    <TodoFooter
      @changeAllTodo="changeAllTodo"
      @deleteAll="deleteAll"
      @deleteSelected="deleteSelected"
      :isAllDone="isAllDone"
      v-if="todoList.length > 0"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { ITodoItem } from './types'
import TodoList from './components/TodoList.vue'
import InputHeader from './components/InputHeader.vue'
import TodoFooter from './components/TodoFooter.vue'

const todoList = ref<ITodoItem[]>([])

// todo
const isAllDone = computed(() => {
  let flag = true
  todoList.value.map((todo) => {
    if (todo.done === false) {
      flag = false
    }
  })
  return flag
})

const addNewTodo = (name: string) => {
  if (!name) {
    alert('不能为空')
    return
  }
  const newTodo = { id: todoList.value.length, name, done: false }
  todoList.value.push(newTodo)
}

const deleteItem = (index: number) => {
  todoList.value.splice(index, 1)
}

// todo
const changeAllTodo = (emitAllDone: boolean) => {
  todoList.value.forEach((todo) => {
    if (emitAllDone === true) {
      todo.done = true
    } else {
      todo.done = false
    }
  })
}

const deleteAll = () => {
  todoList.value.splice(0, todoList.value.length)
}

const deleteSelected = () => {
  todoList.value = todoList.value.filter((todo) => {
    if (!todo.done) {
      return todo
    }
  })
}

const changeTodoDone = (id: number, isDone: boolean) => {
  todoList.value.map((todo) => {
    if (todo.id === id) {
      todo.done = isDone
    }
  })
}
</script>

<style></style>
