import type { SlotsType } from 'vue'
import type { ComponentBaseProps } from '../../config-provider/context'
import type { FormItemLayout } from '../Form'
import type { FormItemInputProps } from '../FormItemInput.tsx'
import type { FormItemLabelProps, LabelTooltipType } from '../FormItemLabel'
import type { Meta, Rule } from '../types'
import { defineComponent } from 'vue'

const NAME_SPLIT = '__SPLIT__'

interface FieldError {
  errors: string[]
  warnings: string[]
}

const _ValidateStatuses = ['success', 'warning', 'error', 'validating', ''] as const
export type ValidateStatus = (typeof _ValidateStatuses)[number]

export type FeedbackIcons = (itemStatus: {
  status: ValidateStatus
  errors?: any[]
  warnings?: any[]
}) => { [key in ValidateStatus]?: any }

interface BaseFormItemProps {
  name?: string
  rules?: Rule[]
  trigger?: string
  validateTrigger?: string | string[] | false
  validateDebounce?: number
  validateFirst?: boolean | 'parallel'
}

export type FormItemProps = BaseFormItemProps
  & ComponentBaseProps
  & Omit<FormItemLabelProps, 'requiredMark'>
  & FormItemInputProps
  & {
    noStyle?: boolean
    id?: string
    hasFeedback?: boolean | { icons: FeedbackIcons }
    validateStatus?: ValidateStatus
    required?: boolean
    hidden?: boolean
    // initialValue?: any;
    messageVariables?: Record<string, string>
    tooltip?: LabelTooltipType
    layout?: FormItemLayout
  }

export interface FormItemEmits {
  [key: string]: (...args: any[]) => void
}
export interface FormItemSlots {
  default: () => any
}

function genEmptyMeta(): Meta {
  return {
    errors: [],
    warnings: [],
    touched: false,
    validating: false,
    name: [],
    validated: false,
  }
}

// https://github.com/ant-design/ant-design/issues/46417
// `getValueProps` may modify the value props name,
// we should check if the control is similar.
function isSimilarControl(a: object, b: object) {
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  return (
    keysA.length === keysB.length
    && keysA.every((key) => {
      const propValueA = (a as any)[key]
      const propValueB = (b as any)[key]

      return (
        propValueA === propValueB
        || typeof propValueA === 'function'
        || typeof propValueB === 'function'
      )
    })
  )
}

const InternalFormItem = defineComponent<
  FormItemProps,
  FormItemEmits,
  string,
  SlotsType<FormItemSlots>
>(
  () => {
    return () => {
      return null
    }
  },
)

const FormItem = InternalFormItem

export default FormItem
