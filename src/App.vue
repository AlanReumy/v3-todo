<template>
  <div class="container mt-5 w-75">
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
    <teleport to="#popModal">
      <transition name="fade">
        <PopModal
          v-show="isModalShow"
          :title="'注意'"
          :content="'todo内容不能为空'"
          @closePopModal="closePopModal"
        />
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import TodoList from './components/TodoList.vue'
import InputHeader from './components/InputHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import PopModal from './components/PopModal.vue'
import useTodoList from './hooks/useTodoList'
import useModal from './hooks/usePopModal'

const { isModalShow, closePopModal } = useModal()
const {
  todoList,
  addNewTodo,
  deleteAll,
  deleteItem,
  deleteSelected,
  isAllDone,
  changeAllTodo,
  changeTodoDone
} = useTodoList(isModalShow)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
