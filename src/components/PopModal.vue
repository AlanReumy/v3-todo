<template>
  <div class="popModal">
    <div class="h-100">
      <div class="bg-light text-dark p-3 bg-body rounded lh-base h-100">
        <div
          class="border-bottom d-flex justify-content-between h-25 pb-2"
          v-if="props.popModal.title"
        >
          <div class="ms-2">
            <span>
              {{ props.popModal.title }}
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
        <div class="mt-2 ms-2 h-75" style="line-height: 500%">
          {{ props.popModal.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { PopModal } from '../types'

const props = defineProps<{
  popModal: PopModal
}>()
const emits = defineEmits(['closePopModal'])

const closePopModal = () => {
  emits('closePopModal')
}
</script>

<style scoped>
.popModal {
  position: absolute;
  width: 300px;
  height: 200px;
  left: 50%;
  top: 50%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  text-align: center;
  margin-left: -150px;
  margin-top: -100px;
}
.close:hover {
  cursor: pointer;
}
</style>
