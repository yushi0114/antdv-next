import type { Components } from '@v-c/picker'
import { computed } from 'vue'
import PickerButton from '../PickerButton'

export default function useComponents(components?: Components) {
  return computed(() => ({
    button: PickerButton,
    ...(components ?? {}),
  }))
}
