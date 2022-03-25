<template>
  <div>
    <input type="checkbox" @change="changeAllTodo" :checked="props.isAllDone" />
    <span>全选</span>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

const emits = defineEmits(["changeAllTodo"]);

const props = defineProps<{
  isAllDone: Boolean;
}>();

const changeAllTodo = () => {
  emits("changeAllTodo", !props.isAllDone);
};
</script>
