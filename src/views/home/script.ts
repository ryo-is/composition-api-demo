import { createComponent, reactive } from "@vue/composition-api"
import { HomeComponentState } from "@/types"

export default createComponent({
  setup() {
    const state = reactive<HomeComponentState>({
      text: "Hello Vue Composition API",
      count: 0
    })

    const addCount = (): void => {
      state.count += 1
    }

    const minusCount = (): void => {
      state.count -= 1
    }

    return {
      state,
      addCount,
      minusCount
    }
  }
})
