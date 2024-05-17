import { afterEach, describe, expect, test, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import CounterHttpButton from './CounterHttpButton.vue'

/* global global */
global.fetch = vi.fn()

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe('CounterHttpButton', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  test('counter button should get value from fetch', async () => {
    fetch.mockResolvedValueOnce(createFetchResponse(new Array(2)))
    const wrapper = mount(CounterHttpButton)
    await flushPromises()
    const count = await wrapper.find('[data-testid=txt-counter]')
    expect(count.text()).toBe('2')
  })
})
