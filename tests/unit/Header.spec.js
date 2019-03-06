import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Please click'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { creating: false }
    })
    expect(wrapper.text()).toContain(msg)
  })
})
