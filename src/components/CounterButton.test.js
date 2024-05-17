import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import CounterButton from './CounterButton.vue'

test('counter button should increment', async () => {
  const wrapper = mount(CounterButton)
  const count = await wrapper.find('[data-testid=txt-counter]')
  expect(count.text()).toBe('0')
  await wrapper.find('[data-testid=btn-counter]').trigger('click')
  expect(count.text()).toBe('1')
})

test('counter button should handle initial value', async () => {
  const wrapper = mount(CounterButton, {
    props: {
      initialCount: 10
    }
  })
  const count = await wrapper.find('[data-testid=txt-counter]')
  expect(count.text()).toBe('10')
})

test('counter button should emit count', async () => {
  const wrapper = mount(CounterButton)
  await wrapper.find('[data-testid=btn-counter]').trigger('click')
  const emittedSignals = wrapper.emitted('count')
  expect(emittedSignals).toHaveLength(1)
  expect(emittedSignals.at(0)).toEqual([1])
})
