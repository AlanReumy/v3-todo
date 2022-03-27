import { Ref, ref } from 'vue'

function useModal() {
  const isModalShow = ref(false)

  // todo
  const closePopModal = () => {
    isModalShow.value = false
  }

  // todo
  const openPopModal = (isModalShow: Ref<boolean>) => {
    isModalShow.value = true
  }

  return { isModalShow, closePopModal, openPopModal }
}

export default useModal
