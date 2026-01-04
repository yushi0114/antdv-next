import type { SlotsType } from 'vue'
import type { ButtonProps } from '../button'
import { defineComponent } from 'vue'
import Button from '../button'

const PickerButton = defineComponent<ButtonProps, {}, string, SlotsType<{ default?: () => any }>>(
  (props, { slots }) => {
    return () => (
      <Button size="small" type="primary" {...props}>
        {slots.default?.()}
      </Button>
    )
  },
  {
    name: 'APickerButton',
  },
)

export default PickerButton
