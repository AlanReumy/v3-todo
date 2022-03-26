<template>
  <li class="mb-2 d-flex justify-content-between h-50">
    <div>
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        v-model="props.todo.done"
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

<style>
.todoItem:hover {
  background-color: #f9fafa;
}
</style>
