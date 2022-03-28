import { computed, Ref, ref, watchEffect } from 'vue'
import { Todo } from '../types'
import usePopModal from './usePopModal'
const { openPopModal } = usePopModal()
function useTodoList(isModalShow: Ref<boolean>) {
  const todoList = ref<Todo[]>([])

  if (localStorage.getItem('todoList')) {
    todoList.value = JSON.parse(localStorage.getItem('todoList') as string)
  }

  watchEffect(
    () => {
      localStorage.setItem('todoList', JSON.stringify(todoList.value))
    },
    {
      flush: 'post'
    }
  )

  const addNewTodo = (name: string) => {
    if (!name) {
      openPopModal(isModalShow)
      return
    }
    const newTodo = { id: todoList.value.length, name, done: false }
    todoList.value.push(newTodo)
  }

  const deleteItem = (index: number) => {
    todoList.value.splice(index, 1)
  }

  const deleteAll = () => {
    todoList.value.splice(0, todoList.value.length)
  }

  const deleteSelected = () => {
    todoList.value = todoList.value.filter((todo) => {
      if (!todo.done) {
        return todo
      }
    })
  }

  const isAllDone = computed(() => {
    let flag = true
    todoList.value.map((todo) => {
      if (todo.done === false) {
        flag = false
      }
    })
    return flag
  })

  const changeAllTodo = (emitAllDone: boolean) => {
    todoList.value.forEach((todo) => {
      if (emitAllDone === true) {
        todo.done = true
      } else {
        todo.done = false
      }
    })
  }

  const changeTodoDone = (id: number, isDone: boolean) => {
    todoList.value.map((todo) => {
      if (todo.id === id) {
        todo.done = isDone
      }
    })
  }

  return {
    todoList,
    addNewTodo,
    deleteAll,
    deleteItem,
    deleteSelected,
    isAllDone,
    changeAllTodo,
    changeTodoDone
  }
}

export default useTodoList
