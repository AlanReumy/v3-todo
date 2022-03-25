<template>
  <InputHeader @addNewTodo="addNewTodo" />
  <TodoList :todoList="todoList" @deleteItem="deleteItem"></TodoList>
  <TodoFooter
    @changeAllTodo="changeAllTodo"
    :isAllDone="isAllDone"
    v-if="todoList.length > 0"
  />
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { ITodoItem } from "./types";
import TodoList from "./components/TodoList.vue";
import InputHeader from "./components/InputHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";

const todoList = ref<ITodoItem[]>([]);

// todo
const isAllDone = computed(() => {
  let flag = true;
  todoList.value.map((todo) => {
    if (todo.done === false) {
      flag = false;
    }
  });
  return flag;
});

const addNewTodo = (name: string) => {
  if (!name) {
    alert("不能为空");
    return;
  }
  const newTodo = { id: todoList.value.length, name, done: false };
  todoList.value.push(newTodo);
};

const deleteItem = (index: number) => {
  todoList.value.splice(index, 1);
};

// todo
const changeAllTodo = (isAllDone: boolean) => {
  todoList.value.forEach((todo) => {
    if (isAllDone === true) {
      todo.done = true;
    } else {
      todo.done = false;
    }
  });
};
</script>
