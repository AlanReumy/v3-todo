<template>
  <li>
    <input type="checkbox" v-model="props.todo.done" />
    <span>{{ props.todo.name }}</span>
    <button @click="deleteItem">删除</button>
  </li>
</template>

<script lang="ts" setup>
import { ITodoItem } from "../types";

const props = defineProps<{
  todo: ITodoItem;
  index: Number;
}>();

const emit = defineEmits(["deleteItem"]);

const deleteItem = () => {
  emit("deleteItem", props.index);
};
</script>
