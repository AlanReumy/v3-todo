<template>
  <div class="d-flex justify-content-between">
    <div class="h-50">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        @change="changeAllTodo"
        :checked="props.isAllDone"
      />

      <span class="ms-3">全选</span>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-danger btn-sm me-3"
        @click="deleteSelected"
      >
        删除已完成
      </button>
      <button type="button" class="btn btn-warning btn-sm" @click="deleteAll">
        清空todo
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

const emits = defineEmits(["changeAllTodo", "deleteAll", "deleteSelected"]);

const props = defineProps<{
  isAllDone: Boolean;
}>();

const changeAllTodo = () => {
  emits("changeAllTodo", !props.isAllDone);
};

const deleteAll = () => {
  emits("deleteAll");
};

const deleteSelected = () => {
  emits("deleteSelected");
};
</script>
