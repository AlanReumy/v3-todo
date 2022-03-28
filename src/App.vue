<template>
  <div class="container w-auto">
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
    <Teleport to="body">
      <transition name="fade">
        <div class="popModal-container" v-show="isModalShow">
          <PopModal
            :title="'注意'"
            :content="'todo内容不能为空'"
            @closePopModal="closePopModal"
          />
        </div>
      </transition>
    </Teleport>
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
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
body {
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popModal-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
}
</style>
