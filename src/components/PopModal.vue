<template>
  <div class="position-relative w-100 h-100">
    <div class="position-absolute start-50 translate-middle w-50">
      <div class="bg-light text-dark shadow-lg p-3 mb-5 bg-body rounded">
        <div
          class="border-bottom d-flex justify-content-between h-25 pb-2"
          v-if="props.title"
        >
          <div class="ms-2">
            <span>
              {{ props.title }}
            </span>
          </div>
          <div class="me-2" @click="closePopModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x close"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <div class="mt-2 ms-2">
          <span>
            {{ props.content }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  title: string
  content: string
}>()
const emits = defineEmits(['closePopModal'])

const closePopModal = () => {
  emits('closePopModal')
}
</script>

<style scoped>
.close:hover {
  cursor: pointer;
}
</style>
