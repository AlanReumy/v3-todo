<template>
  <ul class="mt-3">
    <TodoItem
      v-for="(todo, index) in props.todoList"
      :todo="todo"
      :index="index"
      @deleteItem="deleteItem"
    />
  </ul>
</template>

<script lang="ts" setup>
import TodoItem from "./TodoItem.vue";
import { ITodoItem } from "../types";
import { defineEmits } from "vue";

const emits = defineEmits(["deleteItem"]);

const props = defineProps<{
  todoList: ITodoItem[];
}>();

const deleteItem = (index: number) => {
  emits("deleteItem", index);
};
</script>
