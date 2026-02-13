import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { h, nextTick, ref } from 'vue'
import { ConfigProvider, Input } from '../src'

describe('configProvider', () => {
  describe('input', () => {
    it('should apply styles from ConfigProvider', async () => {
      const wrapper = mount({
        render() {
          return h(ConfigProvider, {
            input: {
              styles: {
                input: { color: 'rgb(255, 0, 0)' },
              },
            },
          }, {
            default: () => h(Input, { value: '' }),
          })
        },
      })

      const input = wrapper.find('input')
      expect(input.exists()).toBe(true)
      expect(input.element.style.color).toBe('rgb(255, 0, 0)')
    })

    it('should be reactive to style changes', async () => {
      const color = ref('rgb(255, 0, 0)') // red
      const wrapper = mount({
        render() {
          return h(ConfigProvider, {
            input: {
              styles: {
                input: { color: color.value },
              },
            },
          }, {
            default: () => h(Input, { value: '' }),
          })
        },
      })

      const input = wrapper.find('input')
      expect(input.element.style.color).toBe('rgb(255, 0, 0)')

      color.value = 'rgb(0, 0, 255)' // blue
      await nextTick()
      expect(input.element.style.color).toBe('rgb(0, 0, 255)')
    })

    it('should handle late arriving styles', async () => {
      const inputConfig = ref({})
      const wrapper = mount({
        render() {
          return h(ConfigProvider, {
            input: inputConfig.value,
          }, {
            default: () => h(Input, { value: '' }),
          })
        },
      })

      const input = wrapper.find('input')
      // Initially no color
      expect(input.element.style.color).toBe('')

      // Update config to have styles
      inputConfig.value = { styles: { input: { color: 'rgb(0, 0, 255)' } } }
      await nextTick()

      // Should now be blue
      expect(input.element.style.color).toBe('rgb(0, 0, 255)')
    })
  })
})
